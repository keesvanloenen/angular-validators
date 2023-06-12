import { Injectable } from '@angular/core';
import { Observable, delay, find, from } from 'rxjs';

interface User {
  id: number,
  name: string,
  username: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, name: 'Bert de Vries', username: 'bert73' },
    { id: 2, name: 'Bo Lamme', username: 'bobo' },
    { id: 3, name: 'Els Methorst', username: 'elsjefiderelsje' },
  ];

  get(name: string): Observable<unknown> {
    return from(this.users)
      .pipe(
        find(user => user.username === name),
        delay(1000)
      );
  }
}
