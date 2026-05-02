import { defineStore } from 'pinia'

export const useStore = defineStore('productos', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      productos : [
        { 
            nombre: "iPhone 15 Pro Max", 
            precio: 5299900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Apple%20iPhone%2015%20Pro%20Max.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Honor 90", 
            precio: 1799900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Honor%2090.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Motorola Edge 50 Pro", 
            precio: 2499900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Motorola%20Edge%2050%20Pro.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "POCO X6 Pro 5G", 
            precio: 1649900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/POCO%20X6%20Pro%205G.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Google Pixel 8 Pro", 
            precio: 3850000, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Pixel%208%20Pro.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Samsung Galaxy A56", 
            precio: 1950000, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Samsung%20A56.jpeg" ,
            categoria: "celulares"
        },
        { 
            nombre: "Samsung Galaxy S24 Ultra", 
            precio: 5899900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Samsung%20Galaxy%20S24%20Ultra.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Samsung Galaxy Z Fold6", 
            precio: 8999900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Samsung%20Galaxy%20Z%20Fold6.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Xiaomi 14 Ultra", 
            precio: 5499900, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Xiaomi%2014%20Ultra.png" ,
            categoria: "celulares"
        },
        { 
            nombre: "Xiaomi Redmi Note 13 Pro+ 5G", 
            precio: 1850000, 
            imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/a3d40413f5b5beb7a93a18f9d9d9e2345e01108e/Xiaomi%20Redmi%20Note%2013%20Pro+%205G%20(2).png" ,
            categoria: "celulares"
        },
        {
          nombre: "Acer Swift Go 14",
          precio: 3200000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/Acer%20Swift%20Go%2014.png",
          categoria: "computadores"
        },
        {
          nombre: "Asus ROG Zephyrus G14",
          precio: 8500000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/Asus%20ROG%20Zephyrus%20G14.png",
          categoria: "computadores"
        },
        {
          nombre: "Dell XPS 13 Plus",
          precio: 7800000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/Dell%20XPS%2013%20Plus.png",
          categoria: "computadores"
        },
        {
          nombre: "HP Pavilion Aero 13",
          precio: 2850000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/HP%20Pavilion%20Aero%2013.png",
          categoria: "computadores"
        },
        {
          nombre: "Lenovo IdeaPad Slim 3",
          precio: 1950000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/Lenovo%20IdeaPad%20Slim%203.png",
          categoria: "computadores"
        },
        {
          nombre: "Lenovo ThinkPad X1 Carbon Gen 12",
          precio: 9200000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/Lenovo%20ThinkPad%20X1%20Carbon%20Gen%2012.png",
          categoria: "computadores"
        },
        {
          nombre: "MSI Titan 18 HX",
          precio: 21500000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/MSI%20Titan%2018%20HX.png",
          categoria: "computadores"
        },
        {
          nombre: "MacBook Air M3",
          precio: 5600000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/MacBook%20Air%20M3.png",
          categoria: "computadores"
        },
        {
          nombre: "MacBook Pro 16 M3 Max",
          precio: 15800000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/MacBook%20Pro%2016%20M3%20Max.png",
          categoria: "computadores"
        },
        {
          nombre: "Surface Laptop 5",
          precio: 4200000,
          imagen: "https://raw.githubusercontent.com/Carlos-763/Tienda-imagenes/1458878a4802e0f76f0f2daf3efa102aa8599c16/Surface%20Laptop%205.png",
          categoria: "computadores"
        }
      ]   
    }
  },
    getters: {
     productosall: (state) => state.productos,
  },
})