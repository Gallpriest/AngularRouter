import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute){ }

  ngOnInit() {
  }

  goToUsers() {

    // navigate programmatically and
    // use 'relativeTo' object parameter to tell
    // the router which router link must be used
    // as a basis for link concatenation
    this.router.navigate(['/users'], { relativeTo: this.activeRoute });
  }

}
