(function($) {
    $(function() {
        /*
        var latitude = $("#latitude").html();
        latitude = (latitude == "None" ? -34.644 : latitude);
        var longitude = $("#longitude").html();
        longitude = (longitude == "None" ? 150.644 : longitude);
        */
        var latitude = 42.96114, longitude = -78.81498;
        var latLng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            zoom: 20,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    });
})(grp.jQuery);
