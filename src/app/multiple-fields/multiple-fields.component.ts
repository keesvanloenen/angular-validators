import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { addressValidator } from '../validators/address.validator';

@Component({
  selector: 'app-multiple-fields',
  templateUrl: './multiple-fields.component.html',
  styleUrls: ['./multiple-fields.component.scss']
})
export class MultipleFieldsComponent {
  postalCodeForm = new FormGroup(
    {
      postalCode: new FormControl(''),
      city: new FormControl(''),
    },
    /* 👇 group-level validation here */
    { validators: addressValidator(['10', 'Amsterdam'])}
  );

  get touched() {
    return this.postalCodeForm.controls.city.touched 
    && this.postalCodeForm.controls.postalCode.touched;
  }

  save() {
    console.log('Save postcode:', this.postalCodeForm.value);
  }
}
