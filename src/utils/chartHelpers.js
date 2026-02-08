/**
 * Prepare data for category chart
 * @param {Array} preferences - Array of preference objects
 * @returns {Array} Chart data with category counts
 */
export const prepareCategoryData = (preferences) => {
  const categoryCount = preferences.reduce((acc, pref) => {
    acc[pref.category] = (acc[pref.category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count
  }));
};

/**
 * Prepare data for importance chart
 * @param {Array} preferences - Array of preference objects
 * @returns {Array} Chart data with importance distribution
 */
export const prepareImportanceData = (preferences) => {
  const importanceCount = preferences.reduce((acc, pref) => {
    acc[pref.importance] = (acc[pref.importance] || 0) + 1;
    return acc;
  }, {});

  const importanceOrder = ['high', 'medium', 'low'];
  const importanceLabels = {
    high: 'High',
    medium: 'Medium',
    low: 'Low'
  };

  return importanceOrder
    .filter(level => importanceCount[level])
    .map(level => ({
      name: importanceLabels[level],
      value: importanceCount[level]
    }));
};

/**
 * Get statistics about preferences
 * @param {Array} preferences - Array of preference objects
 * @returns {Object} Statistics object
 */
export const getPreferenceStats = (preferences) => {
  const totalPreferences = preferences.length;
  const categories = new Set(preferences.map(p => p.category)).size;
  const highImportance = preferences.filter(p => p.importance === 'high').length;
  const avgDetailsLength = preferences.reduce((acc, p) => acc + (p.details?.length || 0), 0) / totalPreferences;

  return {
    totalPreferences,
    categories,
    highImportance,
    avgDetailsLength: Math.round(avgDetailsLength)
  };
};

/**
 * Filter preferences by category
 * @param {Array} preferences - Array of preference objects
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered preferences
 */
export const filterByCategory = (preferences, category) => {
  return preferences.filter(pref => pref.category === category);
};

/**
 * Filter preferences by importance
 * @param {Array} preferences - Array of preference objects
 * @param {string} importance - Importance level to filter by
 * @returns {Array} Filtered preferences
 */
export const filterByImportance = (preferences, importance) => {
  return preferences.filter(pref => pref.importance === importance);
};

/**
 * Sort preferences by date (newest first)
 * @param {Array} preferences - Array of preference objects
 * @returns {Array} Sorted preferences
 */
export const sortByNewest = (preferences) => {
  return [...preferences].sort((a, b) => b.id - a.id);
};

/**
 * Sort preferences by importance (high to low)
 * @param {Array} preferences - Array of preference objects
 * @returns {Array} Sorted preferences
 */
export const sortByImportance = (preferences) => {
  const importanceWeight = { high: 3, medium: 2, low: 1 };
  return [...preferences].sort((a, b) => 
    importanceWeight[b.importance] - importanceWeight[a.importance]
  );
};
