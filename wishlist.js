

// Create Data 
products =
[
    // Start Phone Section 
    {
        id:1,
        Image:"IMAGE/2.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:2,
        Image:"IMAGE/phones and tablets/3.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:3,
        Image:"IMAGE/phones and tablets/4.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:4,
        Image:"IMAGE/phones and tablets/5.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    // End Phone Section 
    // Start Lap Sextion
    {
        id:5,
        Image:"IMAGE/new lap/lap1.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:6,
        Image:"IMAGE/new lap/lap2.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:7,
        Image:"IMAGE/new lap/lap3.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:8,
        Image:"IMAGE/new lap/lap2.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    // End Lap Section 
    // Start Accssories Section 
    {
        id:9,
        Image:"IMAGE/accessories/access1.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:10,
        Image:"IMAGE/accessories/access2.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:11,
        Image:"IMAGE/accessories/access3.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:12,
        Image:"IMAGE/new lap/lap2.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },

    // End Accssories Section
    // Start Tablet Section 
    {
        id:13,
        Image:"IMAGE/accessories/access1.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:14,
        Image:"IMAGE/accessories/access2.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:15,
        Image:"IMAGE/accessories/access3.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    {
        id:16,
        Image:"IMAGE/new lap/lap2.png",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

    },
    // End Tablet Section 
]


var cardString = JSON.stringify(products);

function valueProduct(numberWish) {
    
    setProduct(numberWish, cardString , 3);
    getProduct(numberWish);
        
}


function setProduct(key, value , expires) {
    if(key != undefined && value != undefined && expires>0) {
        var date = new Date();
        date.setDate(date.getDate()+parseInt(expires));
        document.cookie= key+"="+value+";expires="+date.toUTCString();
        return true;
        

    }
    else {
        var error = new Error ("Not Invalid")
        return error;

    }

}
function getProduct(numberWish) {

    const newLocal = products.map(item => item.id);
    var ids = newLocal
    var Images = products.map(item => item.Image)
    var titles = products.map(item => item.title);
    // var idsParsInt = parseInt(ids);

  //  Create A function To Add The Product In The Wishlist Page 



            // Cheack on the Card If The Click equal Id Or Not 
            let getCart = document.getElementById("cart1")
            getCart.addEventListener("click" , ()=> {
                number2 = numberWish +1;
            for(let i = 0; i <  number2; i++) {
                if(i == numberWish) {

    
                                var getProductElement = document.getElementById("productGet");
                            
                                getProductElement.innerHTML= 
                                    `
                                    ${ids[--i]}
                                    <div class="card-2">
                                    <div class="imag">
                                    <a href=""><img src="${Images[i]}" alt=""></a>
                                    </div>
                                    <div class="contain">
                                        <i class="fa-sharp fa-regular fa-heart" style="color: #000000;"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                        <p>Star</p>
                                        <p>${titles[i]}</p>
                                        <p>EGP 142.74(10 used & new offers)</p>
                                        <button class="butt-sec1">Add To Cart</button>
                                    </div>
                                </div> 

                                `
                                break;

                            
                }
            }


        })
}


    
