var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8741, lng: -87.6285},
    zoom: 15
  });

  var home = new google.maps.Marker({
    position: { lat: 41.70839, lng: -87.65131},
    map: map
  });

  var pratice = new google.maps.Marker({
    position: { lat: 41.68480, lng: -87.72345 },
    map: map
  });

  var distPoints = [
    { lat: 41.8730, lng: -87.6279 },
    { lat: 41.87299780452928, lng: -87.62762881329594 },
    { lat: 41.869100, lng: -87.627030 },
    { lat: 41.869280, lng: -87.625870 },
    { lat: 41.868690, lng: -87.625380 },
  ];

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);

}

window.initMap = initMap;
