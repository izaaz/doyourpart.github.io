var map;
var autocomplete;
var centerMarker;

var lookingForSomeone = 'images/red_MarkerL.png';
var helpNeeded = 'images/red_MarkerH.png';
var accomodationAvailable = 'images/green_MarkerA.png';
var foodNeeded = 'images/blue_MarkerF.png';

function onPlaceChanged(){
	var place = autocomplete.getPlace();
  	if (place.geometry) {
    	map.panTo(place.geometry.location);
    	map.setZoom(15);
	}
};

function onDrag(){
	marker.setPosition(map.center);
};

function initialize(){
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
      center: new google.maps.LatLng(13.289034562066552, 79.77767460937501),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas, mapOptions);
    marker = new google.maps.Marker({
	    position: map.center,
	    map: map,
	    title: 'Hello World!',
	    icon: lookingForSomeone
	  });    

    autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"));
    autocomplete.addListener('place_changed', onPlaceChanged);
    map.addListener('center_changed', onDrag);
};



google.maps.event.addDomListener(window, 'load', initialize);