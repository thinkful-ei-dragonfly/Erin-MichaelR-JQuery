'use strict';

function handleClick() {
  $('.thumbnail').click(function() {
    console.log($(this));
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    console.log($('.hero').children()[0]);
    // $('.hero').children()[0].attr('src', imgSrc);
    // $('.hero').children()[0].attr('alt', imgAlt);
  });
}

$(handleClick);