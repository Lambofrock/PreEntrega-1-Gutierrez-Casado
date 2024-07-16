
const products = [
    {
      id: "1",
      name: "polera verde",
      price: 12000,
      category: "polera",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/628210-800-1000?v=638315891544970000&width=800&height=1000&aspect=true",
      description: "polera verde algodon manga larga",
    },
    {
      id: "2",
      name: "ipolera blanca",
      price: 12000,
      category: "polera",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/628204-800-1000?v=638315891515830000&width=800&height=1000&aspect=true",
      description: "polera balnca manga larga",
    },
    {
      id: "3",
      name: "polera azul",
      price: 10000,
      category: "polera",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/723796/RK110021467_LOQ_1.jpg?v=638481998693570000?width=1200&height=auto",
      description: "polera azul manga corta algodon",
    },
    {
      id: "4",
      name: "poleron beige",
      price: 20000,
      category: "poleron",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/681699/RK110021445_XOF_1.jpg?v=638422353501930000?width=1200&height=auto",
      description: "poleron grueso beige",
    },
    {
      id: "5",
      name: "poleron cafe",
      price: 19990,
      category: "poleron",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/681695/RK110021445_9QO_1.jpg?v=638422353480200000?width=1200&height=auto",
      description: "poleron grueso cafe",
    },
    {
      id: "6",
      name: "poleron gris",
      price: 17000,
      category: "poleron",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/681707/RK110021444_70N_1.jpg?v=638422353544700000?width=1200&height=auto",
      description: "poleron hoodie gris",
    },
    {
      id: "7",
      name: "chaqueta gris",
      price: 99900,
      category: "chaqueta",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/740290/RK210021511_431_1.jpg?v=638526940965570000?width=1200&height=auto",
      description: "chaqueta algodon organico ",
    },
    {
      id: "8",
      name: "chaqueta larga",
      price: 189990,
      category: "chaqueta",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/740149/RK21702169_9QO_1.jpg?v=638526940401670000?width=1200&height=auto",
      description: "chaqueta q cubre las patas",
    },
    {
      id: "9",
      name: "chaqueta estampado",
      price: 149990,
      category: "chaqueta",
      img: "https://rockfordcl.vtexassets.com/arquivos/ids/740660/RK210021528_WAP_1.jpg?v=638526942638900000?width=1200&height=auto",
      description: "chaqueta excesivamente cara",
    },

];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };
  