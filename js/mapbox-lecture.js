"use strict";

mapboxgl.accessToken = mapboxKey;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15,
    // center: [-98.4916, 29.4252]
    center: {lng: -98.4916, lat: 29.4252}
});

// customizing the map

// map.setCenter()
// map.setZoom()

// markers

// var marker = new mapboxgl.Marker();

// marker.setLngLat({lng: -98.4916, lat: 29.4252});
// marker.addTo(map);

// marker
//     .setLngLat({lng: -98.4916, lat: 29.4252})
//     .addTo(map);

// popups

// var popup = new mapboxgl.Popup();
//
// popup.setHTML('<h1>San Antonio!</h1>');
//
// marker.setPopup(popup);

// events

// marker.on('dragend', function() {
//     console.log('hello');
// });

// extra controls to add

// var nav = new mapboxgl.NavigationControl();
// map.addControl(nav, 'top-left');

// geocode reverse geocode

// // the geocode method from mapbox-geocoder-utils.js

// geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxKey).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(20);
// });

geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxKey).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(20);
});

// // reverse geocode method from mapbox-geocoder-utils.js
// reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxKey).then(function(results) {
//     console.log(results);
// });

