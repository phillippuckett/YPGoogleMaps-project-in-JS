// INITIALIZE MAP //
var initMap = function () {

    // MAP CANVAS //
    var mapDiv = document.getElementById('map');

    // DEFAULT LOCATION //
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 0, lng: 0 },
        zoom: 10
    });

    // MARKERS //
    for (var i = 0; i < mapData.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(mapData[i].latitude, mapData[i].longitude),
            map: map,
            title: mapData[i].businessName
        });
    }

    // GO TO LOCATION //
    var latLng = marker.getPosition();
    map.setCenter(latLng);

    // INFO WINDOW //
    // var content = businessName;
    // var infowindow = new google.maps.InfoWindow();

    // google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
    //     return function () {
    //         infowindow.setContent(content);
    //         infowindow.open(map, marker);
    // };
    // })(marker, content, infowindow));

    ////////////////////////////////////////////////////////////

    // var infoWindow = [];

    // var infoWindowContent =
    // '<div class"infoWindow">' +
    // '<h3>Business Information</h3>' +
    //'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rem nam suscipit eveniet ad quod non dolorum sed nemo enim molestias magni, illum tenetur unde debitis expedita, quaerat aperiam perferendis.</p>' +
    // '</div>';

    // new google.maps.InfoWindow({
    // content: infoWindowContent
    // });

    // Display info window when the marker is clicked //
    // google.maps.event.addListener(marker, 'click', function () {
    // infoWindow.open(map, marker);
    // });
};
