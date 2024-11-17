var productContainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{

            productlist[count].style.display="block"

        }
    }

})

var sidenav = document.querySelector(".side-navbar");
var navbarToggle = document.querySelector(".navbar-menu-toggle");

function shownavbar() {
    sidenav.style.left = "0";
}

function closenavbar() {
    sidenav.style.left = "-60%";
}

// Add event listeners to ensure toggle functionality works across all pages
if (navbarToggle) {
    navbarToggle.addEventListener("click", shownavbar);
}

var closeButton = document.querySelector(".side-navbar p"); // Assuming the close icon is a <p> element
if (closeButton) {
    closeButton.addEventListener("click", closenavbar);
}


