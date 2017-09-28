import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import './jquery.sticky';
import './jquery.magnific-popup';


$(document).ready(function($){
   console.log('soy webpack!');

    $('.photo-gallery').each(function(){$(this).magnificPopup({delegate: 'a',type: 'image',gallery: {enabled:true}});});
    $('.widget-container').sticky({topSpacing:0});
    $('.carousel').carousel({interval: 4000});

});
