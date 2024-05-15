import React, { useState } from 'react';
import UserInputForm from './UserInputForm';
import MenuRecommendations from './MenuRecommendations';
import { generateMenuRecommendations } from './api';
import './App.css';

const App = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);

  const handleSubmit = (userInput) => {
    setLoading(true);
    setError(null);
    try {
      const recommendationsData = generateMenuRecommendations(userInput);
      setRecommendations(recommendationsData);
      setStep(2);
    } catch (error) {
      console.error('Error generating recommendations:', error);
      setError('An error occurred while generating recommendations. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <main>
        {step === 1 ? (
          <section className="user-input-section" aria-label="User Input">
            <UserInputForm onSubmit={handleSubmit} />
          </section>
        ) : (
          <section className="recommendations-section" aria-label="Menu Recommendations">
            {loading ? (
              <div className="loading-spinner"></div>
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : (
              <MenuRecommendations recommendations={recommendations} onBack={() => setStep(1)} />
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default App;