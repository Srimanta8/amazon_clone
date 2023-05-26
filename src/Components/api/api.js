import axios from 'axios'

export async function ProductsData(){
    const Products=await axios.get(
        "https://fakestoreapi.com/products"
        );
        return Products
} 