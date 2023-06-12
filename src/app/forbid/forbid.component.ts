import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbid } from '../validators/forbid.validator';

@Component({
  selector: 'app-forbid',
  templateUrl: './forbid.component.html',
  styleUrls: ['./forbid.component.scss']
})
export class ForbidComponent {
  postalCodeForm = new FormGroup({
    // postalCode: new FormControl('', 
    //   [
    //     Validators.required,
    //     forbid(['1012NX', '1012PA'])
    //   ]
    // ),
    postalCode: new FormControl('', {
      validators: [
        Validators.required,
        forbid(['1012NX', '1012PA'])
      ],
      nonNullable: true,
    }),
  });

  save() {
    console.log('Save postcode:', this.postalCodeForm.value);         // kan null bevatten
    console.log('Save postcode:', this.postalCodeForm.getRawValue()); // je weet zeker dat controls niet gedisabled kunnen zijn
  }
}
