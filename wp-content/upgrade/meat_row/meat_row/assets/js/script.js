/**Slick*/
$(document).ready(function () {
    $('.slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            initialSlide: 1,
        }
    );
});

/**MaskedInput*/
$(function($){
    $(".phone").mask("+38 (099) 999-99-99",{placeholder:" "});
});


// /**Select*/
// $(document).ready(function () {
//     var lang = document.getElementById("ua");
//     lang.onchange = function () {
//         window.location =
//             "https://studyintomsk.ru" +
//             lang.options[lang.options.selectedIndex].value;
//     };
// });