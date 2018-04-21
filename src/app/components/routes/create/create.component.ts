import { SessionService } from './../../../shared/services/session.service';
import { User } from './../../../shared/model/user.model';
import { RoutesService } from './../../../shared/services/routes.service';
import { Route } from './../../../shared/model/route.model';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer, Directive } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { } from '@types/googlemaps';
import { RouteConfigLoadEnd, Router } from '@angular/router';

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

constructor(
  private sessionService: SessionService,
  private routesService: RoutesService,
  private router: Router
) {}
user: User;
apiError: string;
 // google maps zoom level
 // tslint:disable-next-line:no-inferrable-types
 zoom: number = 14;
 // initial center position for the map
 // tslint:disable-next-line:no-inferrable-types
 lat: number = 40.3913563;
 // tslint:disable-next-line:no-inferrable-types
 lng: number = -3.6995028;

 startPoint = [];

 endPoint = [];

 markers: Marker[] = [];

 location;

 // tslint:disable-next-line:prefer-const
 route: Route = new Route();


 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`);
 }

 mapClicked($event: any) {
   if ( this.markers.length < 1 ) {
   this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     label: 'S',
     draggable: true
   });
   this.startPoint = [$event.coords.lat, $event.coords.lng];
    } else if ( this.markers.length < 2 && this.markers.length > 0) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        label: 'E',
        draggable: true
      });
      this.endPoint = [$event.coords.lat, $event.coords.lng];
    }
 }

 markerDragEnd(m, $event: MouseEvent) {
   console.log('dragEnd', m, $event);

   if ( m.label === 'S' ) {
    this.startPoint = [$event.coords.lat, $event.coords.lng];
   } else {
    this.endPoint = [$event.coords.lat, $event.coords.lng];
   }
  // this.start = 'Hola';
 }

 ngOnInit() {
  this.user = this.sessionService.getUser();
  if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    }.bind(this)
  );
 }
 }

 onSubmitCreate(form) {
    const route = {
      ...this.route,
      owner: this.user,
      startPoint: this.startPoint,
      endPoint: this.endPoint
    };
    this.routesService.create(route).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
}



 // tslint:disable-next-line:member-ordering

}

// just an interface for type safety.
