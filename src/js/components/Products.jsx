import '../../css/App.scss';
import Logo from "../../assets/smeg_logo.png";

export default function Products ({products, onRemove}) {
    
    // Funktion zum Sortieren der Produkte nach Ablaufdatum, ältestes Datum zuerst
    const sortedProducts = [...products].sort((a, b) => {
        return new Date (a.expirationDate) - new Date (b.expirationDate);
    })

    // identifiziert abgelaufene Produkte
    const expiredProducts = products.filter((products) => new Date(products.expirationDate) < new Date());    
 

   
    return (
        <div className='app'>
            <img className='logo' src={Logo} alt="Smeg Logo" />
            
            <ul className='product'>
                {sortedProducts.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>                          
                        <p className={expiredProducts.includes(product) ? 'expired blink' : ''}>{product.expirationDate}</p>
                        <p>Menge: {product.volume}</p>
                        <button onClick={() => onRemove(product.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}