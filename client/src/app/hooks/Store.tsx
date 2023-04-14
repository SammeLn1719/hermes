import { makeAutoObservable } from "mobx"

export default class Store{
    _types: any;
    _brands:any;
    _products:any;
    _setSelectedType:any;
    constructor(){
        this._types = []
        this._brands = []
        this._products = []
        this._setSelectedType = {}
        makeAutoObservable(this)
    }
    setTypes(types:any){
        this._types = types
    }
    setBrands(brands:any){
        this._brands = brands 
    }
    setProducts(products:any){
        this._products = products
    }
    setSelectedType(type:any){
        this._setSelectedType = type
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get products(){
        return this._products
    }
    get selectedType(){
        return this._setSelectedType
    }
}