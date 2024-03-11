/****************/
// Sets pading based on header height 
/***************/
function headerHeight() {
    var h = $('.navbar')[0].clientHeight;
    document.querySelector('.introduction').style.paddingTop = h + `px`;
};


/*****************/
// Shows menu background filter
/*****************/
$('.navbar-toggler').click(function ()  {
    $(this)[0].ariaExpanded == "true" ? document.querySelector('body').style.overflow = "hidden" : document.querySelector('body').style.overflow = "unset";
    var backdropFilter = document.querySelector('.backgroundFilter');
    backdropFilter.classList.contains('backgroundFilter-On') ? backdropFilter.classList.remove('backgroundFilter-On') : backdropFilter.classList.add('backgroundFilter-On')
})



/*****************/
// Closes menu when menu iteme is clicked on mobile
/*****************/
function closeMenu() {
    document.querySelector('.navbar-toggler').click()
}


/****************/
// Calls headerHeight() function when document is loaded
/***************/
$(document).ready(function () {
    //headerHeight();
    AOS.init();
    new kursor({
        type: 1,
        removeDefaultCursor: true,
        color: '#212121',
    })
});


/****************/
// Calls headerHeight() function when document is resized
/***************/
window.addEventListener("resize", (event) => {
    //headerHeight();
    AOS.refresh();
    if (window.innerWidth < 992) {
        document.querySelectorAll('.nav-link').forEach((button) => {
            button.addEventListener('click', closeMenu)
        })
    }
    else {
        document.querySelectorAll('.nav-link').forEach((button) => {
            button.removeEventListener("click", closeMenu);
        })
    }
});


/****************/
// Adds event listener to menu items when in mobile mode
/***************/
window.addEventListener("load", (event) => {
    if (window.innerWidth < 992) {
        document.querySelectorAll('.nav-link').forEach((button) => {
            button.addEventListener('click', closeMenu)
        })
    }
});

/****************/
// Adds invert filter to cursor when <a> is hoverd
/***************/
$('a').mouseenter(function () {
    document.querySelector('.kursor').style.padding = '15px';
    document.querySelector('.kursor').style.backdropFilter = "invert(1)";
});
/****************/
// Removes invert filter to cursor when cursor leaves <a> 
/***************/
$('a').mouseleave(function () {
    document.querySelector('.kursor').style.padding = '0px';
    document.querySelector('.kursor').style.backdropFilter = "none";
}
)



/****************/
// Changes cursor color and border color when .form is hoverd
/***************/
$('.form').mouseenter(function () {
    document.querySelector('.kursor').style.borderColor = '#f8f8f8';
    document.querySelector('.kursorChild').style.background = '#f8f8f8';
});
/****************/
// Changes cursor color and border color to default when cursor leaves .form 
/***************/
$('.form').mouseleave(function () {
    document.querySelector('.kursor').style.borderColor = '#212121';
    document.querySelector('.kursorChild').style.background = '#212121';

}
)



/****************/
// Add's animation to <i> when form button is hoverd
/***************/
$('.form button').mouseenter(function () {
    document.querySelector('.form button i').classList.toggle('sendHover')
});
/****************/
// Removes animation from <i> when cursor leaves form button
/***************/
$('.form button').mouseleave(function () {
    document.querySelector('.form button i').classList.toggle('sendHover')
}
)


/****************/
// Add's submit event listener to form
/***************/
document.getElementById('form').addEventListener('submit', function (event) {
    /****************/
    // Forwards form to Email JS
    /***************/
    event.preventDefault();
    const serviceID = 'service_ts6zof6';
    const templateID = 'template_fobasgp';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            Swal.fire(
                'Good job!',
                'I just got your message, and I will get back to you right away! 😃',
                'success'
            )
            console.log('Sent!');
        }, (err) => {
            Swal.fire(
                'Opss!',
                'Something went wrong! Feel free to email me. 😃',
                'error'
            )
        });
});