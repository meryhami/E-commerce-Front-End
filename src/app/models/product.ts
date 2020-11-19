import { comment } from "./comment";

export interface product { 
    id : number;
    title : String;
    price : number;
    imageUrl : string;
    categorie : string;
    description : string;
    
comments: Array<comment>;
likes: Number

}
