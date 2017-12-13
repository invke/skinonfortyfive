// Behaviour related to the header partial

$(document).on('turbolinks:load', function () {

    // Wire mobile view expansion / collapse toggle on the menu-toggle button
    $("#header__mobile-menu-toggle").on('click', function () {
        $(".header__nav-wrapper").toggleClass('collapsed');
    });

    // Wire in sub-menu overlay behaviour for nav items
    $(".nav__item").on('click', function () {
        var navId = $(this).find("a").attr('data-navid');

        // Collapse mobile menu if open on click
        var $header__navWrapper = $(".header__nav-wrapper");
        if (!$header__navWrapper.hasClass('collapsed'))
            $header__navWrapper.addClass('collapsed');

        var $submenuOverlay = $(".submenu-overlay");
        // Find the related submenu
        var $submenuOverlay__menu = $submenuOverlay.find(".submenu-overlay__menu--" + navId);

        // If the overlay is expanded
        if (!$submenuOverlay.hasClass('collapsed')) {
            // Un-style all nav items
            $(".nav__item").removeClass('expanded');
            // .. and we are selecting a new submenu ..
            if (!$submenuOverlay__menu.hasClass("active")) {
                // Reset all submenus & active the corresponding one
                $submenuOverlay.find(".submenu-overlay__menu").removeClass('active');
                $submenuOverlay__menu.addClass('active');
                // Style the new / clicked nav-item
                $(this).addClass('expanded');
            } else {
                // .. else we are selecting the same submenu - so we collapse
                $submenuOverlay.addClass('collapsed');
                $(this).removeClass('expanded');
            }
        } else {
            // If it isn't expanded, then expanded and activate ..
            $submenuOverlay.removeClass('collapsed');
            $(this).addClass('expanded');
            // .. bu resetting all submenus & active the corresponding one
            $submenuOverlay.find(".submenu-overlay__menu").removeClass('active');
            $submenuOverlay__menu.addClass('active')
        }
    });

    // Wire in close sub-menu overlay button
    $(".submenu-overlay__close").on('click', function () {
       $(".submenu-overlay").addClass('collapsed');
       $(".nav__item").removeClass('expanded');
    });
});