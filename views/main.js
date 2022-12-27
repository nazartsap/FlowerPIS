let carts = document.querySelectorAll('.cart-btn');

let product = [
    {
    name: 'Букет цветов 1',
    tag: 'Букет цветов 1',
    price: 1200,
    inCart: 0
    },
    {
    name: 'Букет цветов 2',
    tag: 'Букет цветов 2',
    price: 1200,
    inCart: 0
    },
    {
        name: 'Букет цветов 3',
        tag: 'Букет цветов 3',
        price: 1200,
        inCart: 0
    },
    {
        name: 'Букет цветов 4',
        tag: 'Букет цветов 4',
        price: 1200,
        inCart: 0
    },
    {
        name: 'Букет цветов 5',
        tag: 'Букет цветов 5',
        price: 1200,
        inCart: 0
    },
    {
        name: 'Букет цветов 6',
        tag: 'Букет цветов 6',
        price: 1200,
        inCart: 0
    },
    {
            name: 'Букет цветов 7',
            tag: 'Букет цветов 7',
            price: 1200,
            inCart: 0
    },
    {
            name: 'Букет цветов 8',
            tag: 'Букет цветов 8',
            price: 1200,
            inCart: 0
    },
    {
        name: 'Букет цветов 9',
        tag: 'Букет цветов 9',
        price: 1200,
        inCart: 0
    },
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(product[i]);
    })
}

function onLoadCartNumbers(){
    let productNumders = localStorage.getItem('cartNumbers');

    if(productNumders){
        document.querySelector('cart span').textContent = productNumders;
    }
}



function cartNumbers(product){
   

    let productNumders =localStorage.getItem('cartNumbers');
    
    productNumders = parseInt(productNumders);

    if(productNumders){
        localStorage.setItem('cartNumbers', productNumders + 1);
        document.querySelector('cart span').textContent = productNumders + 1;
    } else{

        localStorage.setItem("cartNumbers", 1);
        document.querySelector('cart span').textContent = 1;
    }
    setItem(products);
}

function setItams(products) {
    consol.log("funcion")
    consol.log("my product is", products);
}

onLoadCartNumbers();
