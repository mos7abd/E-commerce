

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener("click" , ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener("click", ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        image: 'IMAGE/3.jpg',
        name: 'Phone',
        price: 12000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5


    },
    {
        id: 2,
        image: 'IMAGE/2.jpg',
        name: 'Phone',
        price: 15000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 3,
        image: 'IMAGE/3.jpg',
        name: 'Phone',
        price: 1000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 4,
        image: 'IMAGE/4.jpg',
        name: 'Phone',
        price: 20000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 5,
        image: 'IMAGE/5.jpg',
        name: 'Phone',
        price: 50000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 6,
        image: 'IMAGE/access3.png',
        name: 'Phone',
        price: 30000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 7,
        image: 'IMAGE/access2.png',
        name: 'Phone',
        price: 40000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 8,
        image: 'IMAGE/access3.png',
        name: 'Phone',
        price: 5000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5

    },
    {
        id: 9,
        image: 'IMAGE/lap1.png',
        name: 'Phone',
        price: 7000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5
    },
    {
        id: 10,
        image: 'IMAGE/lap1.png',
        name: 'Phone',
        price: 6000,
        category: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'High quality',
        stock: 5
    }
];

var products2 = JSON.parse(localStorage.getItem("productsStorge")); // Parse the JSON string

//Sent To Admin 
function initApp2(){

    products.forEach((value , key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `

            <img src= "${value.image}">
            <div class="title">${value.name}</div>
            <div class="title">${value.id}</div>
            <div class="title">${value.category}</div>
            <div class="title">${value.description }</div>
            <div class="title">${value.stock}</div>
    
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
 

}

// Call The Function 
initApp2();

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <div class="title">${value.category}</div>
            <div class="title">${value.description}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();


//Add To Card For puy
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

//Contniu Add
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

//Sum Customer Pay
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Start Insert The Data To Handle Add Cart
//  Create Data 


// Sent To Admin 


function request() {
    var selectedProducts = [];

    listCards.forEach((value) => {
        if (value != null) {
            selectedProducts.push({
                id: value.id,
                name: value.name,
                price: value.price,
                stock: value.stock,
                agree1: false,
                agree2: true
                
            });
        }
    });
    alert("The order was completed successfully");
    localStorage.setItem('requestProducts', JSON.stringify(selectedProducts));
}



// Display Products
