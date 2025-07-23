// app.js
const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json()); // pour parser le JSON

// Connection à MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB'))
.catch((err) => console.error('Erreur de connexion à MongoDB', err));

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});