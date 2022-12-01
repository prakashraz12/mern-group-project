import { createContext } from "react";
import { useFetch } from "../utils/hooks";

export const ProductContex = createContext({});
function ProductProvider(props) {
    const {data, isLoading, isError} = useFetch('http://localhost:4000/api/products')

  return <ProductContex.Provider value={{data, isLoading, isError}}>{props.children}</ProductContex.Provider>;
}


export default ProductProvider;
