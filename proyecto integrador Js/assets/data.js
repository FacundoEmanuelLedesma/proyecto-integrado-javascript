const productsData = [
    {
      id: 1,
      name: 'Hamburguesa con papas fritas',
      bid: 1050,
      category: 'Lunes',
      cardImg: './assets/img/products/paty.jpg',
    },
    {
      id: 2,
      name: 'Milanesa c/Guarnicion (papas fritas o ensalada)',
      bid: 1580,
      category: 'Martes',
      cardImg: './assets/img/products/mila-guarnicion.jpg',
    },
    {
      id: 3,
      name: 'Pollo entero + Gaseosa',
      bid: 2850,
      category: 'Miercoles',
      cardImg: './assets/img/products/polloentero.jpg',
    },
    {
      id: 4,
      name: 'Costillitas de cerdo',
      bid: 2150,
      category: 'Jueves',
      cardImg: './assets/img/products/costillitas-de-cerdo.jpg',
    },
    {
      id: 5,
      name: 'Pastel de papa',
      bid: 1550,
      category: 'Viernes',
      cardImg: './assets/img/products/pasteldepapa.jpg',
    },
    {
      id: 6,
      name: 'Suprema napolitana C/guarnicion',
      bid: 1800,
      category: 'Lunes',
      cardImg: './assets/img/products/suprema-napo-guarnicion.jpeg',
    },
    {
      id: 7,
      name: 'Empanadas',
      bid: 1500,
      category: 'Martes',
      cardImg: './assets/img/products/empanadas.jpg',
    },
    {
      id: 8,
      name: 'Fugazzeta rellena',
      bid: 2500,
      category: 'Miercoles',
      cardImg: './assets/img/products/fugazzeta-rellena.jpg',
    },
    {
      id: 9,
      name: 'Pizza Jamon y morron',
      bid: 2000,
      category: 'Jueves',
      cardImg: './assets/img/products/pizza-jym.jpg',
    },
    {
      id: 10,
      name: 'Canelones rellenos de carne',
      bid: 1200,
      category: 'Viernes',
      cardImg: './assets/img/products/canelones-rellenos.jpg',
    },
    {
      id: 11,
      name: 'Matambre a la Pizza',
      bid: 3100,
      category: 'Lunes',
      cardImg: './assets/img/products/matambrealapizza.jpg',
    },
    {
      id: 12,
      name: 'Milanesa a Caballo',
      bid: 2150,
      category: 'Martes',
      cardImg: './assets/img/products/milanesa-caballo.jpg',
    },
    {
      id: 13,
      name: 'Ñoquis con salsa Filetto',
      bid: 1350,
      category: 'Miercoles',
      cardImg: './assets/img/products/ñoquis-salsa.jpg',
    },
    {
      id: 14,
      name: 'Parrillada para 4 personas',
      bid: 5230,
      category: 'Jueves',
      cardImg: './assets/img/products/parrillada-4.jpg',
    },
    {
      id: 15,
      name: 'Tarta de Jamon y Queso',
      bid: 2540,
      category: 'Viernes',
      cardImg: './assets/img/products/tarta-jamon-queso.jpg',
    },
  ];
  
 
  const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
      dividedProducts.push(productsData.slice(i, i + size));
    }
    return dividedProducts;
  };
  
  
  const productsController = {
    dividedProducts: splitProducts(6),
    nextProductsIndex: 1,
    productsLimit: splitProducts(6).length,
  };
  