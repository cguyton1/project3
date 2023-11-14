function initMap() {
  const myLatLng = { lat: 41.689, lng: -87.715 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12
  });

  const marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'My Marker'
  });

  const infowindow = new google.maps.InfoWindow({
    content: 'Now this is my marker!'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
