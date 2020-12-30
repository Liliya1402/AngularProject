export class Product {
    id: number=0;
    name: string='';
    price: number=0;
    photoPath: string='';
    description:string='';

    constructor(id:number,name:string,price:number,path:string, description:string){
        this.id=id;
        this.name=name;
        this.photoPath=path;
        this.price=price;
        this.description=description;
    }
}