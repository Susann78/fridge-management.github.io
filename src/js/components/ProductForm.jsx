import { useState } from "react";
import Input from "./Input";

const initialState = {
    id: 0,  
    name: "",
    expirationDate: "",
    volume: "",   
  };


  function ProductForm({ addProduct }) {
     
    const [formProduct, setFormProduct] = useState({ ...initialState });
    
      const handleChange = (event) => {
        setFormProduct((previousProduct) => ({
          ...previousProduct,
          [event.target.name]: event.target.value,
          id: crypto.randomUUID(),
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formProduct);
        setFormProduct({ ...initialState });
      };
    
      return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Input
              name="name"
              label="Product"
              value={formProduct.name}
              placeholder="Name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="exp">
            <Input
              name="expirationDate"
              label="Expiration Date"
              value={formProduct.expirationDate}
              placeholder="2023-08-16"
              type="date"
              onChange={handleChange}
            />
          </div>
         <div className="volume">
            <Input
              name="volume"
              label="Amount"
              value={formProduct.volume}
              placeholder="5"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
          <input className="btn" type="submit" value="Add" />
          </div>
        </form>
        
      );
    }
    export default ProductForm;
    