const productos = [
    
    {
        id: "1",
        name:"bicicleta",
        price:10000,
        category:"bicicletas",

    }
    {
        id: "2",
        name:"bicicleta montaña",
        price:200000,
        category:"bicicletas",

    }
];

export const getProducts = () => {
retur new Promise ((resolve,)=>{
    setTimeout(()=>{
        resolve(productos)
    },2500)
})
}

export const getProductById = () => {

}