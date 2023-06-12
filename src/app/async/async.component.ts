import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { usernameTaken } from '../validators/username-taken.validator';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent {
  constructor(private userService: UserService){}

  userForm = new FormGroup({
    username: new FormControl('', {
      asyncValidators: [usernameTaken(this.userService)],
    }),
  });

  save() {
    console.log('Save username:', this.userForm.value);
  }
}
