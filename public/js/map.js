console.log(mapToken);
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID 
  style: "mapbox://styles/mapbox/streets-v12",
  center: [77.216721 , 28.644800], // starting position [lng, lat]
  zoom: 8, // starting zoom
}); 
