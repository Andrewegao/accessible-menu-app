import React from 'react';
import './MenuRecommendations.css';

const MenuRecommendations = ({ recommendations, onBack }) => {
  return (
    <div className="menu-recommendations">
      <button className="back-button" onClick={onBack}>
        &#8592; Back
      </button>
      <h2>Menu Recommendations</h2>
      {recommendations.length > 0 ? (
        <div className="recommendation-grid">
          {recommendations.map((item, index) => (
            <div key={index} className="recommendation-card">
              <div className="card-image-container">
                <img src={`/images/${item.image}`} alt={item.name} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <div className="card-nutrition">
                  <div className="nutrition-item">
                    <span className="nutrition-label">Calories:</span>
                    <span className="nutrition-value">{Math.round(item.calories)}</span>
                  </div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Protein:</span>
                    <span className="nutrition-value">{Math.round(item.protein)}g</span>
                  </div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Carbs:</span>
                    <span className="nutrition-value">{Math.round(item.carbs)}g</span>
                  </div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Fat:</span>
                    <span className="nutrition-value">{Math.round(item.fat)}g</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-recommendations">No recommendations found based on your preferences.</p>
      )}
    </div>
  );
};

export default MenuRecommendations;