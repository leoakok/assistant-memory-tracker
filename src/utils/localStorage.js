const STORAGE_KEY = 'assistant_memory_preferences';

/**
 * Load preferences from localStorage
 * @returns {Array} Array of preference objects
 */
export const loadPreferences = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  } catch (error) {
    console.error('Error loading preferences from localStorage:', error);
    return [];
  }
};

/**
 * Save preferences to localStorage
 * @param {Array} preferences - Array of preference objects to save
 */
export const savePreferences = (preferences) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving preferences to localStorage:', error);
  }
};

/**
 * Clear all preferences from localStorage
 */
export const clearPreferences = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing preferences from localStorage:', error);
  }
};

/**
 * Export preferences as JSON file
 * @param {Array} preferences - Array of preference objects to export
 */
export const exportPreferences = (preferences) => {
  const dataStr = JSON.stringify(preferences, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `assistant-preferences-${new Date().toISOString().split('T')[0]}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

/**
 * Import preferences from JSON file
 * @param {File} file - JSON file to import
 * @returns {Promise<Array>} Promise resolving to array of preferences
 */
export const importPreferences = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const preferences = JSON.parse(e.target.result);
        resolve(preferences);
      } catch (error) {
        reject(new Error('Invalid JSON file'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    
    reader.readAsText(file);
  });
};
