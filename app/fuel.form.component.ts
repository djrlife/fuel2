import {Component, Inject} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'fuel-form',
    templateUrl: 'app/fuel.form.component.html',
    styleUrls: ['app/fuel.form.component.css']
})

export class FuelFormComponent {
    form;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            'total': new Control(''),
            'price': new Control(''),
            'litres': new Control(''),
            'odometer': new Control('')
        });
    }

}
