import {Component} from 'angular2/core';
import {FuelFormComponent} from './fuel.form.component';

@Component({
    selector: 'fuel-tracking-app',
    directives: [FuelFormComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {}
