const express = require('express');
const app = express();

const  statePopulation= {
    "West Bengal" : 202331,
    "Maharshtra" : 23654,
    "Delhi" : 235455,
};

app.get('/api/population', (req, res) => {
    res.json(statePopulation);
  });
  
  // Define a route to get population of a specific state
  app.get('/api/population/:state', (req, res) => {
    const state = req.params.state;
    const population = statePopulation[state];
    if (!population) {
      return res.status(404).json({ error: 'Population data not found for the specified state' });
    }
    res.json({ state, population });
  });
  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    // console.log('Server is running on port ${3000});
  });