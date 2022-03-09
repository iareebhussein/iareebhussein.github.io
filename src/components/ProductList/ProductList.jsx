import "../ProductList/ProductList.css";
import Product from "../Product/Product";
import {product} from "../../data";

const ProductList =  () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lama is creative portfolio that your work has been waiting Lama is creative portfolio that your work has been waiting Lama is creative portfolio that your work has been waiting 
                    </p>
                </div>
               <div className="pl-list">
                {product.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
                ))}
                </div> 
            </div>
    )
}

export default ProductList