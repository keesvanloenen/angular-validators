import { AsyncValidatorFn } from "@angular/forms";
import { UserService } from "../services/user.service";
import { map } from "rxjs";

export function usernameTaken(userService: UserService): AsyncValidatorFn {
  return (control) => {
    const username = String(control.value);

    return userService
      .get(username)
      .pipe(
        map((user) => (user ? { usedBy: { existing: user } } : null))
      );
  };
}