const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: 'Invalid input format' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highestLowercaseAlphabet = alphabets
    .filter(item => /^[a-z]$/.test(item))
    .sort()
    .pop();

  const response = {
    is_success: true,
    user_id: 'sauravkrlal', 
    email: 'sauravkumar.lal2021@vitstudent.ac.in',    
    roll_number: '21BCI0213',   
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
