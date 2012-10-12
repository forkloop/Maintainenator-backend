$(function() {
    var latitude = $("#latitude").html();
    latitude = (latitude == "None" ? -34.644 : latitude);
    var longitude = $("#longitude").html();
    longitude = (longitude == "None" ? 150.644 : longitude);
    var mapOptions = {
        zoom: 20,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
});