// Initialize the content if it's not there yet.

export function initializeContent(context) { // Ajout du mot-clé async
    if (!context.content) {
        context.attachShadow({
            mode: 'open'
        });
        context.shadowRoot.innerHTML = `
            <ha-card style="background: none; border: none; box-shadow: none;">
                <div class="card-content" style="padding: 0;">
                </div>
            </ha-card>
        `;
        context.card = context.shadowRoot.querySelector("ha-card");
        context.content = context.shadowRoot.querySelector("div");
    }
}

// Check for edit mode

export async function checkEditor(editor) {
    if (!window.editorElement) {
        const editorElementPromise = new Promise((resolve) => {
          resolve(document.querySelector("body > home-assistant")
            .shadowRoot.querySelector("home-assistant-main")
            .shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace")
            .shadowRoot.querySelector("hui-root")
            .shadowRoot.querySelector("div"));
        });

        window.editorElement = await editorElementPromise;
    } else {
        editor = window.editorElement.classList.contains('edit-mode');
    }
    return editor;
}

// Check if bubble-pop-up.js is installed as a resource and remove it (fix for the previous 1.5.0/1 users)

export async function checkResources(hass) {
    if (!window.resourcesChecked) {
        window.resourcesChecked = true;
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

