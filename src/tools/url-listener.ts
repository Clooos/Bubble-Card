const event = new Event('urlChanged');

export function addUrlListener() {
    if (!window.eventAdded) {

        // 'urlChanged' custom event

        window.eventAdded = true;
        window.popUpInitialized = false;

        ['location-changed', 'connection-status', 'popstate'].forEach((eventType) => {
            window.addEventListener(eventType, urlChanged);
        }, { passive: true });

        function urlChanged() {
            let count = 0;

            // Send more events for when the connexion was lost
            const intervalId = setInterval(() => {
                if (count < 10) {
                    window.dispatchEvent(event);
                    count++;
                } else {
                    clearInterval(intervalId);
                }
            }, 100);
        }
        
        // Check url when pop-ups are initialized
        const popUpInitialized = () => {
            window.dispatchEvent(event);
        };
        
        window.addEventListener('popUpInitialized', popUpInitialized, { passive: true });        
    }
}
