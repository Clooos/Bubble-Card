// Get cached module data from localStorage
export function getCachedModuleData() {
  try {
    const cachedDataString = localStorage.getItem('bubble-card-module-store');
    if (!cachedDataString) return null;

    const cachedData = JSON.parse(cachedDataString);

    // Check if we are in API cooldown period due to API failure
    const apiFailure = localStorage.getItem('bubble-card-api-failure-timestamp');
    
    // If the API is in cooldown period after a failure and the cache is expired but still present, 
    // temporarily extend the validity of the cache
    if (apiFailure && cachedData && cachedData.expiration < Date.now()) {
      console.log("🛡️ API in cooldown period after failure and cache expired, temporary extension of validity");
      // Extend the validity of the cache by 2 hours
      const extendedExpiration = Date.now() + 7200000; // 2 hours
      cachedData.expiration = extendedExpiration;
      
      // Save the extension
      localStorage.setItem('bubble-card-module-store', JSON.stringify(cachedData));
      console.log("⏳ Cache extended until", new Date(extendedExpiration));
      
      return cachedData;
    }
    
    // Check if data is still valid (expiration after 1 day)
    if (cachedData && cachedData.expiration > Date.now()) {
      return cachedData;
    }

    // Data expired, but keep it available in case API checks show no remaining quota
    if (cachedData) {
      console.log("⚠️ Cache expired but kept for potential API limit situations");
      return cachedData;
    }

    return null;
  } catch (e) {
    console.error("Error reading cache:", e);
    return null;
  }
}

// Save module data to the localStorage cache with modules array parameter
export function saveCachedModuleData(modules) {
  if (!modules || Object.keys(modules).length === 0) return;

  try {
    // Save to local storage with expiration (24 hours)
    const expiration = Date.now() + 86400000; // 24 hours
    localStorage.setItem('bubble-card-module-store', JSON.stringify({
      modules,
      expiration
    }));
    console.log("Module data cached until", new Date(expiration));
  } catch (e) {
    console.error("Error saving to cache:", e);
  }
}

// Display a toast notification
export function fireToast(context, message, severity = "info") {
  if (context.hass) {
    const event = new CustomEvent("hass-notification", {
      detail: { message, severity },
      bubbles: true,
      composed: true
    });
    context.dispatchEvent(event);
  } else {
    console.log(`[${severity}] ${message}`);
  }
} 