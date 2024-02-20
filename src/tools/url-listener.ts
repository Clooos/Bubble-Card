// 'urlChanged' custom event for the pop-ups

const event = new Event('urlChanged');

export function addUrlListener() {
    if (!window.eventAdded) {

        window.eventAdded = true;
        window.popUpInitialized = false;

        ['location-changed', 'connection-status', 'popstate'].forEach((eventType) => {
            window.addEventListener(eventType, urlChanged);
        }, { passive: true, once: true });

        function urlChanged() {
            let count = 0;
            window.dispatchEvent(event);
        }
        
        // Check url when pop-ups are initialized
        const popUpInitialized = () => {
            window.dispatchEvent(event);
        };
        
        window.addEventListener('popUpInitialized', popUpInitialized, { passive: true, once: true });        
    }
}
