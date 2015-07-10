/**
 * @file
 * Coding test JS file.
 */

(function ($) {
Drupal.behaviors.coding_test = {
  attach: function (context, settings) {
    $("#login-message").delay(10000).fadeOut();
  }
}
})(jQuery);
