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

const editorElement = selectElement();

export function checkEditor() {
    if (!editorElement) {
        return;
    }
    return editorElement.classList.contains('edit-mode');
}

export async function checkResources(hass) {
    if (!window.resourcesChecked) {

        window.resourcesChecked = true;

        // Check if bubble-pop-up.js is installed as a module and reload the cache after every updates

        let currentVersion = version;
        const storedVersion = localStorage.getItem('version');
        const component = customElements.get("bubble-pop-up");

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
    }
}
