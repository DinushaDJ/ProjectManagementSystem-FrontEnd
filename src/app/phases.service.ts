import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PhasesService {

    private _phasesUrl = 'http://localhost:3000/phases';
    private _proPhaseUrl;

    constructor(private http: HttpClient) {
    }

    getPhases() {
        return this.http.get<any>(this._phasesUrl);
    }

    getProjectPhases(id) {
        this._proPhaseUrl = 'http://localhost:3000/projects/' + id + '/phases/';
        return this.http.get<any>(this._proPhaseUrl);
    }
}
