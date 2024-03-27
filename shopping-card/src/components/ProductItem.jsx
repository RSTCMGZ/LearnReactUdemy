
export const ProductItem = () => {
    return (
        <div className="border p-4 m-2 rounded-lg shadow-lg">
            <img src="https://placehold.co/250x250" alt="product-img" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Ürün 1</h2>
                <p className="text-gray-500 my-2 text-center">100₺</p>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
                    Sepete Ekle
                </button>
            </div>
        </div>
    )
}


export default ProductItem