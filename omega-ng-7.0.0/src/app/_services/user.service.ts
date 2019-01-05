import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    public baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.baseUrl + '/users');
    }

    getById(id: number) {
        return this.http.get(this.baseUrl + '/users/${id}');
    }

    register(user: User) {
        return this.http.post(this.baseUrl + '/users/register', user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl + '/users/${user.id}', user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + '/users/${id}');
    }
}
