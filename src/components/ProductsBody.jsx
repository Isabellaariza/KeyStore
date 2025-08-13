import './ProductsBody.css'

function ProductsBody({title, price, description, category, image, rating: { rate, count }}){
    return(
        <div className="product">
            <img className='product-img' src={image} alt="" />
            <h3>{title}</h3>
            <span>${price}</span>
            <p className='product-description'>{description}</p>
            <p className='product-category'>{category}</p>
            <div className='info'>
                <div className='product-item'>
                    <span>Valoración</span>
                    <span>{rate}</span>
                </div>
                <div className='product-item'>
                    <span>Stock</span>
                    <span>{count}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductsBody