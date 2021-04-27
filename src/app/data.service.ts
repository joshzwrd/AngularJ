import {Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    apiUrl= 'https://jsonplaceholder.typicode.com/photos';

    constructor(private _http: HttpClient) { }
    
    getUsers() {
        return this._http.get<User[]>(this.apiUrl);
    }

}