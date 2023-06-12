import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbid(forbidden: string[]): ValidatorFn {
  return (control: AbstractControl) => {
    const value = String(control.value);
    return forbidden.includes(value) ? {forbid: { value, forbidden }} : null;
  }
}