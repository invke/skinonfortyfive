// Behaviour related to the contact page

$(document).on('turbolinks:load', function () {

    // Wire in consultation sub-menu overlay behaviour for request-consultation button
    $(".request-consultation-button").on('click', function () {
        var navId = "request-consultation";

        // Collapse mobile menu if open on click
        var $header__navWrapper = $(".header__nav-wrapper");
        if (!$header__navWrapper.hasClass('collapsed'))
            $header__navWrapper.addClass('collapsed');

        var $submenuOverlay = $(".submenu-overlay");
        // Expand overlay if necessary (should be unless the button is placed in the header)
        if ($submenuOverlay.hasClass('collapsed'))
            $submenuOverlay.removeClass('collapsed');

        // Find the related submenu
        var $submenuOverlay__menu = $submenuOverlay.find(".submenu-overlay__menu--request-consultation");

        // Un-style all nav items
        $(".nav__item").removeClass('expanded');
        // .. and we are selecting a new submenu ..
        // Reset all submenus & active the corresponding one
        $submenuOverlay.find(".submenu-overlay__menu").removeClass('active');
        if (!$submenuOverlay__menu.hasClass('active'))
            $submenuOverlay__menu.addClass('active');

        // Style the consultation nav-item
        var $navItem = $(".nav__item a[data-navid='request-consultation']").parent();
        $navItem.addClass('expanded');
    });
});