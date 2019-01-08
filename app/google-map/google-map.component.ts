import { Component, OnInit } from '@angular/core';
import {GeoService} from '../geo.service'
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat:number;
  lng:number;
  markers:any;

  constructor(private geo:GeoService) { }

  ngOnInit() {
    this.getUserLocation()
    this.geo.hits.subscribe(hits=>this.markers=hits)
  }
  private getUserLocation(){
    if(navigator.geolocation) 
    {
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
        this.geo.getLocation(500,[this.lat,this.lng])
      });

  }}
}

