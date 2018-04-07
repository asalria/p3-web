import { Route } from './../../../shared/model/route.model';
import { Component, OnInit } from '@angular/core';
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


export class CreateComponent {
 // google maps zoom level
 // tslint:disable-next-line:no-inferrable-types
 zoom: number = 10;
 // initial center position for the map
 // tslint:disable-next-line:no-inferrable-types
 lat: number = 51.673858;
 // tslint:disable-next-line:no-inferrable-types
 lng: number = 7.815982;

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
 markerDragEnd(m: Marker, $event: MouseEvent) {
   console.log('dragEnd', m, $event);
 }

 // tslint:disable-next-line:member-ordering
 markers: Marker[] = [
   {
     lat: 51.673858,
     lng: 7.815982,
     label: 'S',
     draggable: true
   },
   {
     lat: 51.373858,
     lng: 7.215982,
     label: 'E',
     draggable: true
   }
  ];
}

// just an interface for type safety.
