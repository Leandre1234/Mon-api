// models/Product.js
// Importation de la bibliothèque Mongoose pour gérer les modèles MongoDB
const mongoose = require('mongoose');

// Définition du schéma pour les produits
const productSchema = new mongoose.Schema({
  // Nom du produit (obligatoire)
  name: { type: String, required: true },

  // Description du produit (facultative)
  description: String,

  // Prix du produit (obligatoire, doit être ≥ 0)
  price: { type: Number, required: true, min: 0 },

  // Quantité disponible (valeur par défaut = 0, doit être ≥ 0)
  quantity: { type: Number, default: 0, min: 0 }
}, 
{
  // Ajout automatique des champs createdAt et updatedAt
  timestamps: true
});

// Création du modèle Product basé sur le schéma défini
const Product = mongoose.model('Product', productSchema);

// Exportation du modèle pour pouvoir l'utiliser ailleurs dans l'application
module.exports = Product;
