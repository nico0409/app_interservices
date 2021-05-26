import React, {useState,  createContext,useEffect } from 'react';
import cafeApi from '../api/cafeApi';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';




type ProductsContextProps ={
    products: Producto[];
    loadProducts:()=>Promise<void>;
    addProduct:(categoryId: string , ProductName: string )=>Promise<Producto>
    updateProduct:(categoryId: string , ProductName: string,ProductId:string )=>Promise<void>
    deleteProduct:(categoryId: string , ProductName: string,ProductId:string )=>Promise<void>
    loadProductById:(id:string)=>Promise<Producto>
    uploadImage:(data:any,id:string)=>Promise <void>
}


export const  ProductContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({children}:any)=>{

    const [products,setProducts]=useState <Producto[]>([]);

    useEffect(() => {
       loadProducts();
      
    }, [])
    
    const loadProducts = async()=>{

        const resp= await cafeApi.get<ProductsResponse>('/productos?limite=10');
       // setProducts([...products,...resp.data.productos]);
       setProducts([...resp.data.productos]);
        

    }
    const addProduct = async(categoryId: string , ProductName: string ):Promise<Producto>=>{
       
           
        const resp=await cafeApi.post<Producto>('/productos',{
                nombre:ProductName,
                categoria:categoryId
            });
            setProducts([...products,resp.data]);

            return resp.data
    }
    const updateProduct = async(categoryId: string , ProductName: string,ProductId:string )=>{
        const resp=await cafeApi.put<Producto>(`/productos/${ProductId}`,{
            nombre:ProductName,
            categoria:categoryId
        });
        setProducts(products.map(prod=>{
            return (prod._id === ProductId)?resp.data:prod
        }));

    }
    const deleteProduct = async(categoryId: string , ProductName: string,ProductId:string )=>{

    }
    const loadProductById = async(id:string):Promise<Producto>=>{
        const resp= await cafeApi.get<Producto >(`/productos/${ id }`);
        return resp.data;
    }
    const uploadImage = async(data:any,id:string)=>{

    }

    return(

        <ProductContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>
            {children}
        </ProductContext.Provider>
    )
}

