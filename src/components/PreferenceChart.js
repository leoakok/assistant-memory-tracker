import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { prepareCategoryData, prepareImportanceData } from '../utils/chartHelpers';

const COLORS = ['#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#9b59b6', '#1abc9c'];

function PreferenceChart({ preferences }) {
  if (preferences.length === 0) {
    return (
      <div className="empty-state">
        <p>📊 Add preferences to see visualization patterns</p>
      </div>
    );
  }

  const categoryData = prepareCategoryData(preferences);
  const importanceData = prepareImportanceData(preferences);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h3 className="chart-title">Preferences by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3498db" name="Number of Preferences" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-wrapper">
        <h3 className="chart-title">Importance Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={importanceData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {importanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PreferenceChart;
