(() => { 
var __webpack_exports__ = {};
jQuery(document).ready(function () {
  $('.modal_pop').hide();
  $('.show_pop').on('click', function () {
    $('.modal_pop').fadeIn();
  });
  $('.js-modal-close').on('click', function () {
    $('.modal_pop').fadeOut();
  });
});
})()
;
