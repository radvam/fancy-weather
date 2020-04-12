mapboxgl.accessToken =
  'pk.eyJ1IjoiZGltcmFkMSIsImEiOiJjazN4dmQxYnMwdTNtM2pwN3ByOHVhM2ZhIn0.a6gkx084n-rPfoQ60HjU7w';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-75, 40],
  zoom: 9,
});

export { map };
