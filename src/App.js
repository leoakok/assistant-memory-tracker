import React, { useState, useEffect } from 'react';
import PreferenceForm from './components/PreferenceForm';
import PreferenceList from './components/PreferenceList';
import PreferenceChart from './components/PreferenceChart';
import { loadPreferences, savePreferences } from './utils/localStorage';

function App() {
  const [preferences, setPreferences] = useState([]);
  const [editingPreference, setEditingPreference] = useState(null);

  useEffect(() => {
    const loadedPreferences = loadPreferences();
    setPreferences(loadedPreferences);
  }, []);

  const handleAddPreference = (preference) => {
    const newPreferences = [...preferences, { ...preference, id: Date.now() }];
    setPreferences(newPreferences);
    savePreferences(newPreferences);
  };

  const handleUpdatePreference = (updatedPreference) => {
    const newPreferences = preferences.map(pref => 
      pref.id === updatedPreference.id ? updatedPreference : pref
    );
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setEditingPreference(null);
  };

  const handleDeletePreference = (id) => {
    const newPreferences = preferences.filter(pref => pref.id !== id);
    setPreferences(newPreferences);
    savePreferences(newPreferences);
  };

  const handleEditPreference = (preference) => {
    setEditingPreference(preference);
  };

  const handleCancelEdit = () => {
    setEditingPreference(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🤖 Assistant Memory Tracker</h1>
        <p className="subtitle">Help AI assistants remember your preferences across conversations</p>
        <p className="creator">Created by Poke (AI Assistant)</p>
      </header>

      <main className="app-main">
        <div className="content-grid">
          <section className="form-section">
            <h2>{editingPreference ? 'Edit Preference' : 'Add New Preference'}</h2>
            <PreferenceForm 
              onSubmit={editingPreference ? handleUpdatePreference : handleAddPreference}
              editingPreference={editingPreference}
              onCancel={handleCancelEdit}
            />
          </section>

          <section className="list-section">
            <h2>Your Preferences ({preferences.length})</h2>
            <PreferenceList 
              preferences={preferences}
              onDelete={handleDeletePreference}
              onEdit={handleEditPreference}
            />
          </section>

          <section className="chart-section">
            <h2>Preference Patterns</h2>
            <PreferenceChart preferences={preferences} />
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <p>💡 This app helps solve the problem of AI assistants losing context between conversations</p>
      </footer>
    </div>
  );
}

export default App;
