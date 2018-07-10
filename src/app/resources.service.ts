import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ResourcesService {

    private _resourcesUrl = 'http://localhost:3000/resources';

    constructor(private http: HttpClient) {}

    getResources() {
        return this.http.get<any>(this._resourcesUrl);
    }
}
