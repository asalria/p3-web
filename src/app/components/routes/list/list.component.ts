import { RoutesService } from './../../../shared/services/routes.service';
import { Route } from './../../../shared/model/route.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  routes: Array<Route> = [];
  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    this.routesService.list()
    .subscribe((routes) => this.routes = routes);
  }

}

