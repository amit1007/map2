import { Component,OnInit,  } from '@angular/core';
import * as $ from 'jquery';
import { log } from 'util';
import {MapService} from './service/map.service'
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Coardinates } from './model/coardinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService],
})
export class AppComponent implements OnInit{

  mapForm:FormGroup;
  title = 'map2';
  coardinates: any;
  long:any;
  latt:any;
  timestamp:any;
  submitted = false;
  
  constructor(private map : MapService, private formBuilder: FormBuilder) {
  
    // this.mapForm = FormBuilder.group({      
    //   firstName: [''],
    // });

    this.mapForm = new FormGroup({
      mapForm: new FormControl()
   });
   }

  ngAfterViewInit(){
    this.getLocation();
   }
  ngOnInit(){
    console.log ("My Button Init");
  } 
  onSubmit(){
     this.map.getCoordinateInfo(this.coardinates);
  }
  getLocation() {
    if(navigator.geolocation) 
    {
      // console.log(navigator.geolocation)
      // navigator.geolocation.getCurrentPosition(this.showPosition);
      navigator.geolocation.getCurrentPosition((pos)=>this.coardinates = pos)
    } 
    else {
      console.log("Geo Location not supported by browser");
    }
  }

  setPosition(pos){
    this.coardinates = pos
  }
  // function that retrieves the position
  showPosition() {
      this.long= this.coardinates.coords.longitude
      this.latt= this.coardinates.coords.latitude   
      this.timestamp=this.coardinates.timestamp; 
  }

}