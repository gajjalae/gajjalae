/**
* To define routing (url) for each module.
* Routing uses hash location strategy, so you can see # in url
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HolidaysListComponent } from './../pages/holidays-list/holidays-list';
import { HolidayDetailsComponent } from './../pages/holiday-details/holiday-details';

const appRoutes: Routes = [
    {
        path: 'holidaydetails/:date', component: HolidayDetailsComponent
    },
    {
        path: 'holidaylist', component: HolidaysListComponent
    },
    {
        path: '', component: HolidaysListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
