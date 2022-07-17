var img_tracker = "icon1";
var pic = document.getElementById("img1");

function changeImg()
{
    if (img_tracker == "icon1")
    {
        pic.src = "./img/storys.png";
        img_tracker = "icon2";
    }
    else if (img_tracker == "icon2")
    {
        pic.src = "./img/feed.png";
        img_tracker = "icon3";
    }
    else if (img_tracker == "icon3")
    {
        pic.src = "./img/profile.png";
        img_tracker = "icon4";
    }
    else
    {
        pic.src = "./img/direct.png";
        img_tracker = "icon1";
    }
}

function fadeIn()
{
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");    
}

function fadeOut()
{
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");

    // Add listener to the "transitionend" event.
    
    pic.addEventListener("transitionend", function x()
    {
        // Remove the previously added listener, change
        // the image and fade-in the new image.
        
        pic.removeEventListener("transitionend", x);
        changeImg();
        fadeIn();
    });
}

setInterval(fadeOut, 5000);