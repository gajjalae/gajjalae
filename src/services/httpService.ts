import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    getHolidaysList(data: any) {
        return this.http.get('https://holidayapi.com/v1/holidays?country=' + data.country
            + '&year=' + data.year + '&key=' + data.key).map(res => res.json());
    }

    getHolidayDetails(data: any) {
        return this.http.get('https://holidayapi.com/v1/holidays?country=' + data.country
            + '&year=' + data.year + '&month=' + data.month + '&day=' + data.day + '&key=' + data.key).map(res => res.json());
    }
}
