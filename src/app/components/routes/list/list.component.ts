import { Subscription } from 'rxjs/Rx';
import { SearchService } from './../../../shared/services/search.service';
import { RoutesService } from './../../../shared/services/routes.service';
import { Route } from './../../../shared/model/route.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  routes: Array<Route> = [];
  address: string;
  routesSubscription: Subscription;
  constructor(private routesService: RoutesService,
  private searchService: SearchService) { }

  ngOnInit() {
    this.routesService.list()
    .subscribe((routes) => this.routes = routes);
    this.searchService.onFilterChange()
      .subscribe((address) => {
        this.address = address;
        this.routesService.find(address).subscribe(routes => this.routes = routes);
      });
  }

  ngOnDestroy() {
    if (this.routesSubscription) {
      this.routesSubscription.unsubscribe();
    }

  }

}

