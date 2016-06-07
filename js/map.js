var initMap = function () {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 36.1699, lng: -115.1398 },
        zoom: 15        
    });
};

// var map;
// var initMap = function () {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 36.1699, lng: -115.1398 },
//         zoom: 15
//     });
// }

