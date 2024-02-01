


export const productos = [
{
    id: 1, 
    name: 'Vanilla Relax',
    stock: 21, 
    price: 20, 
    category: 'Hogar',
    description: 'Cake Smell', 
    img: 'https://erdevar.000webhostapp.com/card1.jpg',
},
    
{
    id: 2, 
    name: 'Beach Sunshine',
    stock: 10, 
    price: 40, 
    category: 'Relax',
    description: 'Enjoy the afternoon', 
    img: 'https://erdevar.000webhostapp.com/card2.jpg',
    },
{
    id: 3, 
    name: 'Brown Relax',
    stock: 10, 
    price: 33, 
    category: 'elements',
    description: 'Together in the afternoon', 
    img: 'https://erdevar.000webhostapp.com/card3.jpg',
},
{
    id: 4, 
    name: 'Moon Morning',
    stock: 10, 
    price: 34, 
    category: 'elements',
    description: 'The scent of the morning', 
    img: 'https://erdevar.000webhostapp.com/card4.jpg',
},
{
    id: 5, 
    name: 'Moonlight Aurora',
    stock: 10, 
    price: 40, 
    category: 'elements',
    description: 'Aurora in North Pole', 
    img: 'https://erdevar.000webhostapp.com/card5.jpg',
},
{
    id: 6, 
    name: 'Woman Secret',
    stock: 10, 
    price: 38, 
    category: 'elements',
    description: 'Woman smell', 
    img: 'https://erdevar.000webhostapp.com/card6.jpg',
}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (productos.length === 0) {
        reject(new Error('No hay productos'));
    }
    setTimeout(() => {
        resolve(productos);
    }, 2000);

    });
};




