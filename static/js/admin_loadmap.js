(function($) {
    $(function() {
        //Davis Hall
        DEFAULT_LATITUDE = 43.002854;
        DEFAULT_LONGITUDE = -78.78695;
        var latitude = $('.latitude p').html();
        var longitude = $('.longitude p').html();
        if (latitude == '(None)') {
            latitude = DEFAULT_LATITUDE;
            longitude = DEFAULT_LONGITUDE;
        } else {
            latitude = parseFloat(latitude);
            longitude = parseFloat(longitude);
        }
        var latLng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            zoom: 18,
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
