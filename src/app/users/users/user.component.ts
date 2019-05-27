import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

interface UserType {
  id: number;
  name: string;
  surname?: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: UserType;
  paramsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params.id,
      name: this.activeRoute.snapshot.params['name']
    };

    // observable;
    // get data from [routerLink] and use activated Route params
    // observable to subscribe to incoming changes and
    // assign id/name values to the 'user' object
    this.paramsSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
