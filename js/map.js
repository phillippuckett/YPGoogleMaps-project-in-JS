var initMap = function () {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 36.1699, lng: -115.1398 },
        zoom: 10
    });

    // Plots restaurant markers onto map canvas
    for (var i = 0; i < mapData.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(mapData[i].latitude, mapData[i].longitude),
            map: map,
            title: mapData[i].businessName
        });
    }
};
