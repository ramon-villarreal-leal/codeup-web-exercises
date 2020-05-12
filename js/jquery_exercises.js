"use strict";

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

    var heading = $('#ramoni').html();
    alert(heading);

    console.log(heading);

//change classes

    $('.codeup').css({
        'border': '1px solid red',
        'background-color': 'lightblue'


    });

    //element selectors

    $('p').css('background-color', 'blue');

    $('li').css('font-size', '20px');

    $('h1').css('font-style', 'italic');

    var alertPara = $('p').html();
    alert(alertPara);

    var alertLi = $('li').html();
    alert(alertLi);

    //multiple elements
    $('h1, p, li').css({
        'font-size': '50px'


    })

    $('.test').css("background-color", 'purple');
    $('#container').css('background-color', 'red');

});



// //example here for IIFE in combination with JQuery
// (function($){
//     $(document).ready(function() {
//         alert( 'The DOM has finished loading!' );
//     });
// })(jQuery);
