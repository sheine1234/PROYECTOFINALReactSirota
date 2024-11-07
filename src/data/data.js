const products = [
    { 
        id: 1, 
        name: "Hamburguesa Clásica", 
        price: 3000, 
        category: "Fast Food", 
        image: "../images/hamburguesa_clasica.jpg", 
        stock: 10,
        description: "Deliciosa hamburguesa con carne 100% vacuna, lechuga, tomate y mayonesa."
    },
    { 
        id: 2, 
        name: "Hamburguesa Texana", 
        price: 3200, 
        category: "Fast Food", 
        image: "../images/hamburguesa_texana.jpg", 
        stock: 30,
        description: "Hamburguesa con carne a la parrilla, queso cheddar, cebolla caramelizada y BBQ."
    },
    { 
        id: 3, 
        name: "Hamburguesa Mexicana", 
        price: 3400, 
        category: "Fast Food", 
        image: "../images/hamburguesa_mexicana.jpg", 
        stock: 45,
        description: "Hamburguesa con carne, guacamole, jalapeños y salsa picante."
    },
    { 
        id: 4, 
        name: "Nuggets", 
        price: 2200, 
        category: "Fast Food", 
        image: "../images/nuggets.jpg", 
        stock: 60,
        description: "Crujientes nuggets de pollo, perfectos para compartir o disfrutar solos."
    },
    { 
        id: 5, 
        name: "Ensalada de Sushi", 
        price: 3500, 
        category: "Saludable", 
        image: "../images/ensalada_sushi.jpg", 
        stock: 25,
        description: "Refrescante ensalada con ingredientes de sushi, aderezo de sésamo y algas."
    },
    { 
        id: 6, 
        name: "Ensalada de Sushi Panizado", 
        price: 3700, 
        category: "Saludable", 
        image: "../images/ensalada_sushi_panizado.jpg", 
        stock: 20,
        description: "Versión panizada de la ensalada de sushi, crujiente y sabrosa."
    },
    { 
        id: 7, 
        name: "Sándwich de Milanesa", 
        price: 2800, 
        category: "Fast Food", 
        image: "../images/sandwich_milanesa.jpg", 
        stock: 40,
        description: "Sándwich con milanesa de carne, lechuga y tomate en pan fresco."
    },
    { 
        id: 8, 
        name: "Shawarma", 
        price: 3300, 
        category: "Fast Food", 
        image: "../images/shawarma.jpg", 
        stock: 55,
        description: "Delicioso shawarma con carne de pollo, especias y vegetales frescos."
    },
    { 
        id: 9, 
        name: "Shawarma Completo", 
        price: 3500, 
        category: "Fast Food", 
        image: "../images/shawarma_completo.jpg", 
        stock: 50,
        description: "Shawarma completo con salsa tahini, ensalada y pan pita."
    },
    { 
        id: 10, 
        name: "Pollo Teriyaki con Arroz", 
        price: 3600, 
        category: "Especialidades", 
        image: "../images/pollo_teriyaki_arroz.jpg", 
        stock: 35,
        description: "Tierno pollo teriyaki servido sobre una cama de arroz jazmín."
    },
    { 
        id: 11, 
        name: "Lajmashin", 
        price: 3200, 
        category: "Especialidades", 
        image: "../images/lajmashin.jpg", 
        stock: 40,
        description: "Deliciosa masa rellena de carne y especias, ideal para compartir."
    },
    { 
        id: 12, 
        name: "Knische", 
        price: 3100, 
        category: "Especialidades", 
        image: "../images/knische.jpg", 
        stock: 25,
        description: "Masa suave rellena de carne, perfecta para cualquier momento del día."
    },
    { 
        id: 13, 
        name: "Empanada de Pollo", 
        price: 2200, 
        category: "Fast Food", 
        image: "../images/empanada_pollo.jpg", 
        stock: 50,
        description: "Empanada rellena de pollo jugoso y especias, crujiente por fuera."
    },
    { 
        id: 14, 
        name: "Empanadas de Carne", 
        price: 2300, 
        category: "Fast Food", 
        image: "../images/empanada_carne.jpg", 
        stock: 55,
        description: "Empanadas de carne con un relleno sabroso y masa dorada."
    },
    { 
        id: 15, 
        name: "Mila de Carne con Guarnición", 
        price: 3500, 
        category: "Especialidades", 
        image: "../images/mila_carne_guarnicion.jpg", 
        stock: 30,
        description: "Milanesa de carne acompañada de guarnición de papas fritas."
    },
    { 
        id: 16, 
        name: "Mila de Pollo con Guarnición", 
        price: 3400, 
        category: "Especialidades", 
        image: "../images/mila_pollo_guarnicion.jpg", 
        stock: 35,
        description: "Milanesa de pollo servida con una guarnición abundante."
    },
    { 
        id: 17, 
        name: "Mila de Berenjena con Guarnición", 
        price: 3300, 
        category: "Especialidades", 
        image: "../images/mila_berenjena_guarnicion.jpg", 
        stock: 20,
        description: "Milanesa de berenjena crujiente, ideal para vegetarianos."
    },
    { 
        id: 18, 
        name: "Octavo de Pollo con Guarnición", 
        price: 3400, 
        category: "Especialidades", 
        image: "../images/octavo_pollo_guarnicion.jpg", 
        stock: 25,
        description: "Octavo de pollo dorado, acompañado de guarnición a elección."
    },
    { 
        id: 19, 
        name: "Ensalada con Palta", 
        price: 2500, 
        category: "Saludable", 
        image: "../images/ensalada_con_palta.jpg", 
        stock: 60,
        description: "Ensalada fresca con palta, vegetales y un toque de limón."
    },
    { 
        id: 20, 
        name: "Ensalada sin Palta", 
        price: 2300, 
        category: "Saludable", 
        image: "../images/ensalada_sin_palta.jpg", 
        stock: 50,
        description: "Ensalada mixta con vegetales frescos y aderezo de tu elección."
    },
    { 
        id: 21, 
        name: "Ensalada Pollo Crocante", 
        price: 2800, 
        category: "Saludable", 
        image: "../images/ensalada_pollo_crocante.jpg", 
        stock: 45,
        description: "Ensalada con pollo crocante y un mix de lechugas frescas."
    },
    { 
        id: 22, 
        name: "Ensalada Pasta Corta", 
        price: 2700, 
        category: "Saludable", 
        image: "../images/ensalada_pasta_corta.jpg", 
        stock: 40,
        description: "Deliciosa ensalada de pasta corta con vegetales y aderezo."
    },
    { 
        id: 23, 
        name: "Ensalada César", 
        price: 2600, 
        category: "Saludable", 
        image: "../images/ensalada_cesar.jpg", 
        stock: 35,
        description: "Clásica ensalada César con pollo, lechuga y aderezo César."
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            resolve(products)
        }, 2000)
    })
}

const getProduct = (idProduct) => {
    return new Promise ( (resolve)=>{
        setTimeout(()=>{
            const product = products.find((product) => product.id === Number(idProduct));
            resolve(product)
        }, 2000)
    })
}

export {getProducts, getProduct}