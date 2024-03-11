// Make A Function Its Handle Id and return The Page


//For Get WishList
function getwish () {
    window.open("wishList.html" , "_blank" , "")

}


//For Get Shoping Card
function shopingCard() {
    window.open("shoping.html" ,"_blank" , "")
}




let images = ["Image/712X384EN.png", "Image/DesktopEN (1).png", "Image/DesktopEN.jpg"]; // Add paths to your images
let currentIndex = 0;
let interval = null;

const currentImage = document.getElementById("NowImage");

function updateImage(index) {
    currentImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
}

document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("previous").addEventListener("click", previousImage);

document.getElementById("play").addEventListener("click", function() {
    if (!interval) {
        interval = setInterval(nextImage, 500); // Change image every 0.5 seconds
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);
    interval = null;
});

document.getElementById("photos").addEventListener("click", function() {
    interval = setInterval(nextImage, 500);
});

document.getElementById("photos").addEventListener("click", function() {
    clearInterval(interval);
    interval = null;
});
