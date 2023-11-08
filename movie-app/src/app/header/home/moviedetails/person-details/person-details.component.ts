import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersondetailsService } from 'src/app/persondetails.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
  personID: string = '';
  singlePersonDetails: any = [];
  constructor(private route: ActivatedRoute, private persondetailsservice: PersondetailsService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        this.personID = params['id'];
      }
    );

    this.persondetailsservice.getSinglePersonDetails(this.personID).subscribe (
      (data) => {
        this.singlePersonDetails = data;
        console.log('Person Details Page');
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }
}
