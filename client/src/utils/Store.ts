
import { makeAutoObservable } from "mobx"
import { $host } from "../http";
import { fetchProduct } from "../http/productAPI";
import { BrandsResponse, TypesResponse, ProductsResponse } from "../types/response/StoreResponse";

export default class Store{
    _types = {} as TypesResponse;
    _brands = {} as BrandsResponse;
    _products = {} as Array<ProductsResponse>;

    constructor(){
        this.resTypes()
        this.resProduct()
        //this._setSelectedType = {}
        makeAutoObservable(this)
    }
    setTypes(types:TypesResponse){
        this._types = types
    }
    setBrands(brands:TypesResponse){
        this._brands = brands 
    }
 
    setProducts(products:Array<ProductsResponse>){
        this._products = products
    }
    async resTypes(){
        const {data} = await $host.get('api/type/all', {})
        this.setTypes(data)
    }
    async resProduct(){
        const {data} = await $host.get('api/product/all', {})
        this.setProducts(data)
    }

    //setSelectedType(type:Array){
    //    this._setSelectedType = type
    //}
    
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get products(){
        return this._products
    }
    //get selectedType(){
    //    return this._setSelectedType
    //}
}