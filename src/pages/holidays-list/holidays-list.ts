import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/httpService';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-holidays-list',
    templateUrl: './holidays-list.html',
    styleUrls: ['./holidays-list.css']
})

export class HolidaysListComponent implements OnInit {
    title = 'Holdays List';
    holidayList = [];
    keys: any = [];

    constructor(public service: HttpService, public router: Router) {
    }

    ngOnInit() {
        this.getHolidays();
    }

    getHolidays() {

        const obj: Object = {
            'country': 'US',
            'year': '2015',
            'key': '2f4ac684-00fb-49a6-a4ee-d17a20e3d789'
        };

        this.service.getHolidaysList(obj).subscribe(
            data => {
                if (data.status === 200) {
                    this.convertData(data.holidays);
                    console.log(data.holidays);
                    this.holidayList = data.holidays;
                } else {
                    console.log(data);
                }
            }, error => {
                console.log(error);
            }
        );
    }

    convertData(holidays) {
        this.keys = Object.keys(holidays);
    }

    navigateToDetails(date) {
        date = date.toString();
        this.router.navigateByUrl('/holidaydetails/' + date);
    }
}
