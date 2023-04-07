import { makeAutoObservable } from "mobx"

export default class Store{
    _types: any;
    _brands:any;
    _products:any;
    _setSelectedType:any;
    constructor(){
        this._types = [
            {id: 1, name: "креатин"},
            {id: 2, name: "BCAA"},
            {id: 3, name: "Пенисы"}
        ]
        this._brands = [
            {id: 1, name: "OLIMP"},
            {id: 2, name: "TREC"},
            
        ]
        this._products = [
            {id: 1, name: "creatine", price: 54, rating: 5, img: `https://made4life.by/assets/images/products/1945/creatine-monohydrate-100-300-g-trec-nutrition-1000.jpg`},
            {id: 2, name: "creatine", price: 54, rating: 5, img: `https://made4life.by/assets/images/products/1945/creatine-monohydrate-100-300-g-trec-nutrition-1000.jpg`},
            {id: 3, name: "creatine", price: 54, rating: 5, img: `https://made4life.by/assets/images/products/1945/creatine-monohydrate-100-300-g-trec-nutrition-1000.jpg`},
        ]
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