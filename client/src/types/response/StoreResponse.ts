import { ICharacteristic } from "../ICharacteristic";


export interface TypesResponse {
    id: number;
    name: string;
}

export interface BrandsResponse {
    id: number;
    name: string;
}

export interface ProductsResponse{
    id: number;
    name: string;
    info: string;
    cost: number;
    type: string;
    quantity:number;
    brand: string;
<<<<<<< HEAD
    img:string;
=======
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
    amount_in_package: number;
    number_of_servings: number;
    createdAt: string;
    updatedAt: string;
    compounds: ICharacteristic;

}

