export default class Products {
    constructor(entity){
        Object.assign(this,{
            name: '',
            color: '',
            imageType: '',
            price: '',
            }, entity);
    }
}