import React from 'react';

function PreferenceList({ preferences, onDelete, onEdit }) {
  if (preferences.length === 0) {
    return (
      <div className="empty-state">
        <p>📝 No preferences added yet. Start by adding your first preference above!</p>
      </div>
    );
  }

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      case 'low': return '#95a5a6';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="preference-list">
      {preferences.map(pref => (
        <div key={pref.id} className="preference-card">
          <div className="preference-header">
            <span className="preference-category">{pref.category}</span>
            <span 
              className="preference-importance"
              style={{ backgroundColor: getImportanceColor(pref.importance) }}
            >
              {pref.importance}
            </span>
          </div>
          <h3 className="preference-title">{pref.preference}</h3>
          {pref.details && (
            <p className="preference-details">{pref.details}</p>
          )}
          <div className="preference-actions">
            <button 
              onClick={() => onEdit(pref)} 
              className="btn-icon btn-edit"
              title="Edit preference"
            >
              ✏️ Edit
            </button>
            <button 
              onClick={() => onDelete(pref.id)} 
              className="btn-icon btn-delete"
              title="Delete preference"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreferenceList;
