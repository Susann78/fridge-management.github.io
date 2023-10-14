import "../../css/App.scss";
import { useEffect, useState } from "react";

// Import Hintergrundbilder
import Ice from "../../assets/fridge_app_bg_ice.jpg";
import Blue from "../../assets/fridge_app_bg_blue.jpg";
import Orange from "../../assets/fridge_app_bg_orange.jpg";
import Red from "../../assets/fridge_app_bg_red.jpg";
import Black from "../../assets/fridge_app_bg_black.jpg";
import Pink from "../../assets/fridge_app_bg_pink.jpg";

// Import eigener Komponenten
import Products from "./Products";
import ProductForm from "./ProductForm";
import ColorPicker from "./ColorPicker";

export default function App() {
  const [products, setProducts] = useState([]);

  // fetcht Products aus der Datenbank
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // fügt neues Produkt aus dem Formular der Datenbank hinzu
  function addProduct(newProduct) {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
    setProducts((previousProducts) => [...previousProducts, newProduct]);
  }

  // löscht Produkte nach ihrer ID aus der Datenbank
  function handleRemove(id) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setProducts(products.filter((product) => product.id !== id));
  }

  // löscht abgelaufene Produkte
  function handleRemoveExpiredProducts() {
    const updatedProducts = products.filter(
      (product) => new Date(product.expirationDate) >= new Date()
    );
    const expiredProductsIds = products
      .filter((product) => new Date(product.expirationDate) < new Date())
      .map((product) => product.id);
    expiredProductsIds.forEach((id) => {
      handleRemove(id); // ruft Funktion oben wieder auf, weil sie die Speicherung auf dem Server enthält
    });
    setProducts(updatedProducts);
  }


  // löscht alle Produkte
  function handleRemoveAllProducts() {
    const allProductsIds = products.map((product) => product.id);
    allProductsIds.forEach((id) => {
      handleRemove(id); // ruft Funktion wieder auf, weil sie die Speicherung auf dem Server enthält
    });
    setProducts([]);
  }


  // Logik zum Austausch des Hintergrundbildes basierend auf der Farbauswahl und Speicherung im Local Storage,
  // holen des Bildes aus dem Local Storage mit useEffect in der Mounting-Phase
  const storedColor = localStorage.getItem('selectedColor');
  const [selectedColor, setSelectedColor] = useState(storedColor || null);

  useEffect(() => {
    const backgroundImages = {
      ice: Ice,
      pink: Pink,
      orange: Orange,
      red: Red,
      blue: Blue,
      black: Black,
    };

    const initialColor = localStorage.getItem('selectedColor') || "orange";

    if (backgroundImages[initialColor]) {
      document.body.style.backgroundImage = `url(${backgroundImages[initialColor]})`;
    } else {
      document.body.style.backgroundImage = "none";
    }
  }, [selectedColor]);


  function handleColorChange(color) {
    // Speichern der Farbauswahl im Local Storage
    localStorage.setItem('selectedColor', color);
    setSelectedColor(color);
  }


  return (
    <div>
      <section className="products">
        <Products products={products} onRemove={handleRemove} />
      </section>
      <section className="form-wrapper">
        <div>
          <ProductForm addProduct={addProduct} products={products} />
        </div>
      </section>
      <section className="color-picker">
        <div className={`app ${selectedColor ? selectedColor : "none"}`}>
          <ColorPicker onColorChange={handleColorChange} />
        </div>
      </section>
      <section className="fridge-organisation">
        <button className="btn-clean" onClick={() => handleRemoveExpiredProducts(products.id)}>CLEAN</button>
        <button className="btn-defrost" onClick={handleRemoveAllProducts}>DEFROST</button>
      </section>
    </div>
  );
}
