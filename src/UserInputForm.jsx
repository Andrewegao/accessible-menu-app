// UserInputForm.js
import React, { useState } from 'react';
import './UserInputForm.css';

const UserInputForm = ({ onSubmit }) => {
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [preferences, setPreferences] = useState([]);

  const handleButtonClick = (setFunc, value) => {
    setFunc((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ dietaryRestrictions, allergies, preferences });
  };

  return (
    <form className="user-input-form" onSubmit={handleSubmit}>
      <h2>Purple Plate: An Accessible Menu Recommendation System</h2>
      <div className="form-section">
        <h3>Dietary Restrictions</h3>
        <div className="button-group" role="group" aria-label="Dietary Restrictions">
          {[
            { label: 'Vegetarian 🌱', value: 'vegetarian' },
            { label: 'Vegan 🥦', value: 'vegan' },
            { label: 'Gluten-free 🍞', value: 'gluten-free' },
            { label: 'Halal 🕌', value: 'halal' },
            { label: 'Kosher ✡️', value: 'kosher' },
            { label: 'Pescatarian 🐟', value: 'pescatarian' },
            { label: 'Lactose-free 🥛', value: 'lactose-free' },
          ].map((restriction) => (
            <button
              type="button"
              key={restriction.value}
              className={`button ${dietaryRestrictions.includes(restriction.value) ? 'selected' : ''}`}
              onClick={() => handleButtonClick(setDietaryRestrictions, restriction.value)}
              aria-pressed={dietaryRestrictions.includes(restriction.value)}
            >
              {restriction.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Allergies</h3>
        <div className="button-group" role="group" aria-label="Allergies">
          {[
            { label: 'Peanuts 🥜', value: 'peanuts' },
            { label: 'Tree Nuts 🌰', value: 'tree nuts' },
            { label: 'Dairy 🥛', value: 'dairy' },
            { label: 'Eggs 🥚', value: 'eggs' },
            { label: 'Shellfish 🦐', value: 'shellfish' },
            { label: 'Soy 🌿', value: 'soy' },
            { label: 'Wheat 🌾', value: 'wheat' },
          ].map((allergy) => (
            <button
              type="button"
              key={allergy.value}
              className={`button ${allergies.includes(allergy.value) ? 'selected' : ''}`}
              onClick={() => handleButtonClick(setAllergies, allergy.value)}
              aria-pressed={allergies.includes(allergy.value)}
            >
              {allergy.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Preferences</h3>
        <div className="button-group" role="group" aria-label="Preferences">
          {[
            { label: 'Spicy 🌶️', value: 'spicy' },
            { label: 'Low-calorie 🥗', value: 'low-calorie' },
            { label: 'High-protein 🍗', value: 'high-protein' },
            { label: 'Low-carb 🥩', value: 'low-carb' },
            { label: 'Sugar-free 🍭', value: 'sugar-free' },
          ].map((preference) => (
            <button
              type="button"
              key={preference.value}
              className={`button ${preferences.includes(preference.value) ? 'selected' : ''}`}
              onClick={() => handleButtonClick(setPreferences, preference.value)}
              aria-pressed={preferences.includes(preference.value)}
            >
              {preference.label}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="submit-button">
        Get Recommendations
      </button>
    </form>
  );
};

export default UserInputForm;