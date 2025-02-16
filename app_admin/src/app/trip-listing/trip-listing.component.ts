import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';  // Ensure this path is correct
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']  // Corrected here
})
export class TripListingComponent implements OnInit {
  trips: Array<any> = trips;  // Correctly assign trips array

  constructor() {}

  ngOnInit(): void {
    // You can perform additional logic here, if needed
  }
}
