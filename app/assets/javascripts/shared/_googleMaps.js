// Wire in google map initialisation to be required on pages with the map to skin on 45
/**
 * Google map initialisation, configures the map and it's position and then creates it.
 */
function initMap() {
    var myCenter = new google.maps.LatLng(-39.116974, 173.956804);
    var mapProp = {
        center: myCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map);
}

$(document).on('turbolinks:load', function () {
    // If the current page has a google map element
    if ($('#googleMap').length > 0 ) {

        if (window.google) {
            initMap();
        } else {
            $.ajax("https://maps.googleapis.com/maps/api/js?key=AIzaSyDOifQuwu2XxmEVUAnJoscgNy533-50Xfs&callback=initMap", {
                crossDomain: true,
                dataType: 'script'
            });
        }
    }
});