export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {}
    this.createMarkerFromBench = this.createMarkerFromBench.bind(this)
    this.updateMarkers = this.updateMarkers.bind(this)
  }

  createMarkerFromBench({lat, lng, description, id}) {
    let myLatLng = { lat, lng }
    let newMarker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: description
    })
    this.markers[id] = newMarker;
  }
  
  removeMarker(markerId){
    delete this.markers[markerId]
  }

  updateMarkers(benches){
    //creating and keeping old benches
    for (const id in benches) {
      if (!this.markers[id]) {
        this.createMarkerFromBench(benches[id]);
      }
    }

    //removing benches not in store 
    for (const id in this.markers) {
      if (!benches[id]) {
        this.removeMarker(id)
      }
    }
  }
}