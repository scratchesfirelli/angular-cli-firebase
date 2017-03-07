import { Listing } from './../../models/listing';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  bedrooms: Number;
  city: String;
  owner: String;
  price: String;
  title: String;
  type: String;

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let listing = {
      bedrooms: this.bedrooms,
      city: this.city,
      owner: this.owner,
      price: this.price,
      title: this.title,
      type: this.type
    }

    this.firebaseService.addListing(listing);

    this.router.navigate(['/listings']);
  }

}
