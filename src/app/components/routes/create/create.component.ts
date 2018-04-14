import { Route } from './../../../shared/model/route.model';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer, Directive } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { } from '@types/googlemaps';
import { RouteConfigLoadEnd } from '@angular/router';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
 }

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {

 // google maps zoom level
 // tslint:disable-next-line:no-inferrable-types
 zoom: number = 14;
 // initial center position for the map
 // tslint:disable-next-line:no-inferrable-types
 lat: number = 0;
 // tslint:disable-next-line:no-inferrable-types
 lng: number = 0;

 startPoint = [];

 endPoint = [];

 markers: Marker[] = [];

 location;

 route: Route = new Route();


 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`);
 }
/*
 mapClicked($event: any) {
   this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true
   });
 }
*/
 markerDragEnd(m, $event: MouseEvent) {
   console.log('dragEnd', m, $event);

   if ( m.label === 'S' ) {
    this.startPoint = [m.lat, m.lng];
   } else {
    this.endPoint = [m.lat, m.lng];
   }
  // this.start = 'Hola';
 }

 ngOnInit() {
  if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.markers.push({
        lat: position.coords.latitude - 0.001,
        lng: position.coords.longitude - 0.001,
        label: 'S',
        draggable: true
      });
      this.markers.push({
        lat: position.coords.latitude + 0.001,
        lng: position.coords.longitude + 0.001,
        label: 'E',
        draggable: true
      });
    }.bind(this)
  );
 }
 }



 // tslint:disable-next-line:member-ordering

}

// just an interface for type safety.
