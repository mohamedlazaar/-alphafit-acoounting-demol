const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkboxes)
checkboxes()
function checkboxes(){
    const triggerBottom = window.innerHeight / 4 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
$(document).ready(function(){
    $('#client-slider').slick({
        slidesToShow: 3, // Number of items to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true, // Enable dots navigation
        dotsClass: 'slick-dots', // Custom class for dots
        appendDots: $('#client-slider-dots'), // Append dots to the specified element
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

const menuBtn = document.querySelector('.mobile_nav_menu');
const menu = document.querySelector('.nav_container');
const close = document.querySelector('.close')
console.log(menuBtn)
menuBtn.addEventListener('click', () => {
        menuBtn.style.display = "none";
        close.style.display = "block"
        menu.classList.add('active_menu');
        document.body.style.overflowY = "hidden"
});
close.addEventListener('click', ()=>{
    close.style.display = 'none'
    menuBtn.style.display = 'block'
    menu.classList.remove('active_menu')
        document.body.style.overflowY ="auto";
})
