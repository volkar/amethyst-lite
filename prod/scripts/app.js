(function ($, undefined) {
    var resizeTimer;

    // var $window = $(window);
    var $document = $(document);
    // var $html = $('html');
    // var $htmlbody = $('html, body');
    var $body = $("body");

    // Events

    $document.on("click", ".action-toggle-mobile-menu", function () {
        $body.toggleClass("menu-active");
        return false;
    });

    /*
    function resizeElements() {
        // Some recalculations on resize
        // ...
    }
    $window.on("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeElements, 100);
    });
    // Bind orientation change
    $window.on("orientationchange", function () {
        resizeElements();
    });
    // Fire once at startup
    resizeElements();
    */

})(jQuery);