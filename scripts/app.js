

//menu to show 
menuToShow = document.querySelector('.sliding');
// console.log(menuToShow);

hamburgerMenu={
    show:function(event){
        // console.log(menuToShow);
        menuToShow.classList.add("verticalVisible");
        // console.log(menuToShow);
    },

    hide:function(event){
        menuToShow.classList.remove("verticalVisible");
    }
};

// get the hamburger menu button
hamburgerButton = document.querySelector('.hamburger');
//add the event listener
hamburgerButton.addEventListener('click',hamburgerMenu.show);

//get the close button
closeButton = document.querySelector(".closeButton");
//hide on clicking the close button
closeButton.addEventListener('click',hamburgerMenu.hide);
