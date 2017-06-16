// JavaScript source code
// var mapboxgl:any;
var mapboxgl;
// window.onload = function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmluYXRoZSIsImEiOiJjaWp4OGZhMnUwMDI2dWxtMHhrZWVhYm1vIn0.Uff1efmgDOAOJ-nFVHAUgQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
    map.addControl(new mapboxgl.Navigation({ position: 'bottom-right' }));
    map.addControl(new mapboxgl.Geolocate({ position: 'bottom-right' }));
    addTitlesControllers();
// };
function addTitlesControllers() {
    var locationBtn = document.getElementsByClassName("mapboxgl-ctrl-geolocate")[0];
    var zoomIn = document.getElementsByClassName("mapboxgl-ctrl-zoom-in")[0];
    var zoomOut = document.getElementsByClassName("mapboxgl-ctrl-zoom-out")[0];
    var rotation = document.getElementsByClassName("mapboxgl-ctrl-compass")[0];
    //   $(locationBtn).attr('title','Finn din posisjon');
    //   $(zoomIn).attr('title','Zoom inn');
    //   $(zoomOut).attr('title','Zoom ut');
    //   $(rotation).attr('title','Roter kart');
}
//# sourceMappingURL=map.js.map