const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Fake product data
let products = [
  { id: 1, name: "Nike Air Max", brand: "Nike", oldPrice: 8999, newPrice: 4999, image: "https://i.imgur.com/Qr71crq.png" },
  { id: 2, name: "Adidas Ultraboost", brand: "Adidas", oldPrice: 10999, newPrice: 6999, image: "https://i.imgur.com/7JxKjZz.png" },
  { id: 3, name: "Puma RS-X", brand: "Puma", oldPrice: 7999, newPrice: 4599, image: "https://i.imgur.com/Hs1y0kB.png" },
  { id: 4, name: "Converse Chuck Taylor", brand: "Converse", oldPrice: 5999, newPrice: 3499, image: "https://i.imgur.com/6o5E6Qy.png" }
];

// Routes
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/cart", (req, res) => {
  const { productId } = req.body;
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json({ message: "✅ Added to cart", product });
  } else {
    res.status(404).json({ message: "❌ Product not found" });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
