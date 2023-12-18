export function addUrlListener() {
    if (!window.eventAdded) {

        // 'urlChanged' custom event

        const event = new Event('urlChanged');
        window.popUpInitialized = false;

        ['click', 'mousedown', 'touchstart', 'focus', 'location-changed', 'connection-status'].forEach((eventType) => {
            window.addEventListener(eventType, urlChanged);
        }, { passive: true });

        function urlChanged() {
            let count = 0;
            window.dispatchEvent(event);

            // Send more events for when the connexion was lost
            const intervalId = setInterval(() => {
                if (count < 10) {
                    window.dispatchEvent(event);
                    count++;
                } else {
                    clearInterval(intervalId);
                }
            }, 1000);
        }
        
        // Check url when pop-ups are initialized
        const popUpInitialized = () => {
            window.dispatchEvent(event);
            window.addEventListener('popstate', urlChanged, { passive: true });
        };
        
        window.addEventListener('popUpInitialized', popUpInitialized, { passive: true });
        
        window.eventAdded = true;
    }
}
