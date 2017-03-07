import { ListingComponent } from './../listing/listing.component';
import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public af: AngularFire, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.flashMessagesService.show('You are now loggen out', {cssClass: 'alert-success', timeout: 3000} );
  }
}
