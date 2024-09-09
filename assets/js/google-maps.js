function initMap() {
  // Latitude and Longitude
  var myLatLng = { lng: -73.6418418, lat: 45.496564 };

  var map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 10,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Montreal, Canada", // Title Location
  });
}
