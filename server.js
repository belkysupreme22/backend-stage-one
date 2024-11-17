const express = require('express');
const app = express();

app.get('/name', (req, res) => {
  res.status(200).send('Beamlakfekad Tatek'); 
});


app.get('/hobby', (req, res) => {
    res.status(200).json({
      hobbies: [
        'Watching football',
        'Drawing or sketching portraits',
        'Watching movies'
      ]
    });
  });


app.get('/dream', (req, res) => {
    res.status(200).send('To create innovative software solutions that empower people, inspire change, and leave a lasting impact on the world.');
  });
  

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
