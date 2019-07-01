<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
        
      </label>
      <br/>
        
    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import {APIService} from '../ApiService';
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8080';
const apiService = new APIService();



export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },    
      markers: [],
      posicion: null,
      places: [],
      
      currentPlace: null
    };
  },

  mounted() {
    setInterval(this.geolocate(),1000);
    this.getPoints();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var mar = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };  
        this.markers.push({ position: mar });
        this.places.push(this.currentPlace);
         console.log("hola"); 
         
      });
    },
    posicionActual: function(){
      setInterval(this.geolocate(), 1000);
      
    },
    getPoints: function(){
      apiService.getPuntos().then((data) => {
        if(data.data!== undefined){
console.log(data.data);
        //this.markers = data.data;
        }else{
          console.log("No llega nada");
        }
        
        
    });
       
    },
    
    
    created: function () {
    this.posicionActual();
    
  }
  }

};
</script>