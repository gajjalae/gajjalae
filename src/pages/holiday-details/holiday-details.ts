import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/httpService';
import { Router, ActivatedRoute } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-holiday-details',
    templateUrl: './holiday-details.html',
    styleUrls: ['./holiday-details.css']
})

export class HolidayDetailsComponent implements OnInit {
    title = 'HoliDay Info';
    holidayData: any = [];
    date: string = null;
    panelOpenState = false;
    constructor(public service: HttpService, public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (!this.date) {
                this.date = params['date'];
                this.getHolidays();
            }
        });
    }

    getHolidays() {
        const dateArray: Array<string> = this.date.split('-');
        const obj: Object = {
            'country': 'US',
            'year': '2015',
            'key': '2f4ac684-00fb-49a6-a4ee-d17a20e3d789',
            'month': dateArray[1],
            'day': dateArray[2]
        };

        this.service.getHolidayDetails(obj).subscribe(
            data => {
                if (data.status === 200) {
                    console.log(data.holidays);
                    this.holidayData = data.holidays;
                } else {
                    console.log(data);
                }
            }, error => {
                console.log(error);
            }
        );
    }
}
