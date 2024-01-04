import { version } from '../var/version.ts';

// Initialize the content if it's not there yet.

export function initializeContent(context) {
    if (!context.content) {
        context.attachShadow({
            mode: 'open'
        });
        context.shadowRoot.innerHTML = `
            <ha-card style="background: none; border: none; box-shadow: none; border-radius: 16px;">
                <div class="card-content" style="padding: 0;">
                </div>
            </ha-card>
        `;
        context.card = context.shadowRoot.querySelector("ha-card");
        context.content = context.shadowRoot.querySelector("div");
    }
}

// Check for edit mode

function selectElement() {
  try {
    return document.querySelector("body > home-assistant")
      .shadowRoot.querySelector("home-assistant-main")
      .shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace")
      .shadowRoot.querySelector("hui-root")
      .shadowRoot.querySelector("div");
  } catch (error) {
    return undefined;
  }
}

export function checkEditor() {
    const editorElement = selectElement();

    if (!editorElement) {
        return;
    }
    return editorElement.classList.contains('edit-mode');
}

export async function checkResources(hass) {
    if (!window.resourcesChecked) {

        window.resourcesChecked = true;

        // Reload the cache after every updates

        let currentVersion = version;
        const storedVersion = localStorage.getItem('version');

        if (storedVersion !== currentVersion) {
            localStorage.setItem('version', currentVersion);
            location.reload();
        }

        // Check if bubble-pop-up.js is installed as a resource and remove it (fix for the previous 1.5.0/1 users)

        let resources = await hass.callWS({ type: "lovelace/resources" });
        let resource = resources.find(r => r.url.includes("bubble-pop-up.js"));
        if (resource) {
            await hass.callWS({
                type: "lovelace/resources/delete",
                resource_id: resource.id
            });
        }

        // Reorder the frontend resources to put bubble-card.js at the first position
        // This should improve the pop-ups initilalization in regular mode for people with a lot of custom cards

        async function reorderResources(hass) {
          // Retrieve all resources
          let allResources = await hass.callWS({type: 'lovelace/resources'});

          // Find the resource bubble-card.js
          let bubbleCardIndex = allResources.findIndex(res => res.url.includes('bubble-card.js'));
          let bubbleCardRes = null;

          // If bubble-card.js exists and is not at index 0, execute the rest of the code
          if (bubbleCardIndex !== -1 && bubbleCardIndex !== 0) {
            // Remove bubble-card.js from the list
            bubbleCardRes = allResources.splice(bubbleCardIndex, 1)[0];

            // Delete all resources
            for (let res of allResources) {
              await hass.callWS({type: 'lovelace/resources/delete', resource_id: res.id});
            }

            // If bubble-card.js existed, check if it already exists before recreating it
            if (bubbleCardRes) {
              let newAllResources = await hass.callWS({type: 'lovelace/resources'});
              let newBubbleCardIndex = newAllResources.findIndex(res => res.url.includes('bubble-card.js'));
              if (newBubbleCardIndex === -1) {
                await hass.callWS({
                  type: 'lovelace/resources/create',
                  res_type: bubbleCardRes.type,
                  url: bubbleCardRes.url
                });
              }
            }

            // Recreate the other resources
            for (let res of allResources) {
              await hass.callWS({
                type: 'lovelace/resources/create',
                res_type: res.type,
                url: res.url
              });
            }
          }
        }

        reorderResources(hass);
    }
}
