import { ValidatorFn } from "@angular/forms";

export function addressValidator(...validCities: [string, string][])
  : ValidatorFn {
  const allowList = new Map(validCities);
  return (control) => {
    const postalCode: string = control.get('postalCode')?.value;
    const city: string = control.get('city')?.value;

    const firstTwoPostalDigits = postalCode.substring(0, 2);
    const expectedCity = allowList.get(firstTwoPostalDigits);
    return (city === expectedCity || !allowList.has(firstTwoPostalDigits))
      ? null
      : { address: { expectedCity, firstTwoPostalDigits } };
  };
}