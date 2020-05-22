"use strict";

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

    //start Jquery Exercise for changing events...
    $('#ramoni').click(function() {
        console.log('h1 with id "codeup" was clicked');

    //on click changes background of h1 to limegreen need to add h1 tag
    $('#ramoni').click(function() {
        $(this).css('background-color', 'limegreen')
    });




    });
    //changes paragraph size to font-size 18 when double clicked need to add p tag
    $('.all-para').dblclick(function(){
        $(this).css('font-size', '18px')
    });

    // On hover goes red, off hover black. set li tag to red
    $('.li-test').hover(function() {
        $(this).css('color', 'red')


        //second part of function
    }, (function() {
        $(this).css('color', 'black')
    }));




    //end of it below is previous exercises

//     var heading = $('#ramoni').html();
//     alert(heading);
//
//     console.log(heading);
//
// //change classes
//
//     $('.codeup').css({
//         'border': '1px solid red',
//         'background-color': 'lightblue'
//
//
//     });
//
//     //element selectors
//
//     $('p').css('background-color', 'blue');
//
//     $('li').css('font-size', '20px');
//
//     $('h1').css('font-style', 'italic');
//
//     var alertPara = $('p').html();
//     alert(alertPara);
//
//     var alertLi = $('li').html();
//     alert(alertLi);
//
//     //multiple elements
//     $('h1, p, li').css({
//         'font-size': '50px'
//
//
//     })
//
//     $('.test').css("background-color", 'purple');
//     $('#container').css('background-color', 'red');

});



// //example here for IIFE in combination with JQuery
// (function($){
//     $(document).ready(function() {
//         alert( 'The DOM has finished loading!' );
//     });
// })(jQuery);
