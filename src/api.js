// api.js
import menuItems from './menuData';

export const generateMenuRecommendations = (userInput) => {
  const { dietaryRestrictions, allergies, preferences } = userInput;

  // Filter menu items based on user input
  let filteredItems = menuItems.filter((item) => {
    const matchesDietaryRestrictions = dietaryRestrictions.every((restriction) =>
      item.dietaryRestrictions.includes(restriction)
    );
    const matchesAllergies = allergies.every((allergy) => !item.allergies.includes(allergy));
    return matchesDietaryRestrictions && matchesAllergies;
  });

  // Sort menu items based on user preferences
  filteredItems.sort((a, b) => {
    const aMatchesPreferences = preferences.filter((preference) =>
      a.preferences.includes(preference)
    ).length;
    const bMatchesPreferences = preferences.filter((preference) =>
      b.preferences.includes(preference)
    ).length;
    return bMatchesPreferences - aMatchesPreferences;
  });

  return filteredItems;
};