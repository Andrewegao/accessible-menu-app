const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Or any port of your choice

app.use(cors());
app.use(bodyParser.json());

const API_KEY = 'YOUR_API_KEY';

app.post('/api/generate-menu-recommendations', async (req, res) => {
  const { dietaryRestrictions, allergies, preferences } = req.body;

  const prompt = `
    You are an AI assistant that generates personalized menu recommendations based on user dietary restrictions, allergies, and preferences.

    User Input:
    Dietary Restrictions: ${dietaryRestrictions.join(', ')}
    Allergies: ${allergies.join(', ')}
    Preferences: ${preferences.join(', ')}

    Generate personalized menu recommendations based on the user input above. Provide a list of recommended dishes, each on a new line.
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: prompt }],
        max_tokens: 200,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    const generatedText = response.data.choices[0].message.content.trim();
    const recommendations = generatedText.split('\n').filter(line => line.trim() !== '');

    res.json({ recommendations });
  } catch (error) {
    console.error('Error generating menu recommendations:', error);
    res.status(500).json({ error: 'An error occurred while generating recommendations. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});