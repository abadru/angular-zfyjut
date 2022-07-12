import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { employeeData } from './data';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public data: Object[];

    constructor() {
        
    }

    ngOnInit(): void {
        this.data = employeeData;
    }

}