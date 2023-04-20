
<<<<<<< HEAD
import { makeAutoObservable, observable } from "mobx"
=======
import { makeAutoObservable } from "mobx"
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
import { $host } from "../http";
import { fetchProduct } from "../http/productAPI";
import { BrandsResponse, TypesResponse, ProductsResponse } from "../types/response/StoreResponse";

export default class Store{
<<<<<<< HEAD
   
    _products = [] as Array<ProductsResponse>;

    constructor(){
        // this.resTypes()
=======
    _types = {} as TypesResponse;
    _brands = {} as BrandsResponse;
    _products = {} as Array<ProductsResponse>;

    constructor(){
        this.resTypes()
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
        this.resProduct()
        //this._setSelectedType = {}
        makeAutoObservable(this)
    }
<<<<<<< HEAD
    // setTypes(types:TypesResponse){
    //     this._types = types
    // }
    // setBrands(brands:TypesResponse){
    //     this._brands = brands 
    // }
=======
    setTypes(types:TypesResponse){
        this._types = types
    }
    setBrands(brands:TypesResponse){
        this._brands = brands 
    }
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
 
    setProducts(products:Array<ProductsResponse>){
        this._products = products
    }
<<<<<<< HEAD
    // async resTypes(){
    //     const {data} = await $host.get('api/type/all', {})
    //     this.setTypes(data)
    // }
=======
    async resTypes(){
        const {data} = await $host.get('api/type/all', {})
        this.setTypes(data)
    }
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
    async resProduct(){
        const {data} = await $host.get('api/product/all', {})
        this.setProducts(data)
    }

    //setSelectedType(type:Array){
    //    this._setSelectedType = type
    //}
    
<<<<<<< HEAD
    // get types(){
    //     return this._types
    // }
    // get brands(){
    //     return this._brands
    // }
=======
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
    get products(){
        return this._products
    }
    //get selectedType(){
    //    return this._setSelectedType
    //}
}