import { Listing } from './../../models/listing';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: String;
  listing: Listing;
  imageUrl: String;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['$key'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;
      
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(listing.path.toString());
      spaceRef.getDownloadURL().then((url) => {
        this.imageUrl = url;
      }).catch((err) => {
        console.log(err);
      })
    });
  }

}
