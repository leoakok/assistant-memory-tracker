import React, { useState, useEffect } from 'react';

const CATEGORIES = [
  'Communication Style',
  'Technical Level',
  'Favorite Topics',
  'Work Preferences',
  'Learning Style',
  'Other'
];

function PreferenceForm({ onSubmit, editingPreference, onCancel }) {
  const [formData, setFormData] = useState({
    category: 'Communication Style',
    preference: '',
    details: '',
    importance: 'medium'
  });

  useEffect(() => {
    if (editingPreference) {
      setFormData(editingPreference);
    } else {
      setFormData({
        category: 'Communication Style',
        preference: '',
        details: '',
        importance: 'medium'
      });
    }
  }, [editingPreference]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.preference.trim()) {
      onSubmit(formData);
      if (!editingPreference) {
        setFormData({
          category: 'Communication Style',
          preference: '',
          details: '',
          importance: 'medium'
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="preference-form">
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select 
          id="category"
          name="category" 
          value={formData.category} 
          onChange={handleChange}
          className="form-select"
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preference">Preference *</label>
        <input
          id="preference"
          type="text"
          name="preference"
          value={formData.preference}
          onChange={handleChange}
          placeholder="e.g., I prefer concise explanations"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="details">Details</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Add more context or examples..."
          className="form-textarea"
          rows="3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="importance">Importance</label>
        <select 
          id="importance"
          name="importance" 
          value={formData.importance} 
          onChange={handleChange}
          className="form-select"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingPreference ? '✓ Update Preference' : '+ Add Preference'}
        </button>
        {editingPreference && (
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default PreferenceForm;
