import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tab';
import './jquery.sticky';
import './jquery.magnific-popup';
import './jquery.validate';

$(document).ready(function($){
   function applyStickyHeader(){
      if(window.innerWidth >= 768){
         $('.widget-container').sticky({topSpacing:0});
      }else{
         $('.widget-container').unstick();
      }
   }

   $('.photo-gallery').each(function(){
      $(this).magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {enabled:true}
      });
   });

   $('.carousel').carousel({interval: 4000});
   $(window).resize(function() {
      applyStickyHeader();
   });
   applyStickyHeader();

   $('.contact-form').validate({
      messages: window.formMessages
   });

});
