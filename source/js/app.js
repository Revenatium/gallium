import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tab';

import './jquery.sticky';
import './jquery.magnific-popup';
import './jquery.validate';

$(document).ready(function($){
   $( "#toggleBooker" ).click(function(e) {
      e.preventDefault();
      if ($( "#floatingWidget" ).hasClass("d-none")) {
         $( "#floatingWidget" ).removeClass( "d-none" );
      } else {
         $( "#floatingWidget" ).addClass( "d-none" );
         $('#sticky-wrapper').css( "height", "auto");
      }
   });

   window.applyStickyHeader = function(){
      if(window.innerWidth >= 768){
         $('.header').sticky({topSpacing:0});
      }else{
         $('.header').unstick();
      }
   }

   $('.photo-gallery').each(function(){
      $(this).magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {enabled:true}
      });
   });

   $('.video-link').each(function(){
      $(this).magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   });

   $('.carousel').carousel({
      interval: 4000
   });

   $('.contact-form').validate({
      messages: window.formMessages
   });

   $(window).resize(function() {
      window.applyStickyHeader();
   });

   window.applyStickyHeader();

});
