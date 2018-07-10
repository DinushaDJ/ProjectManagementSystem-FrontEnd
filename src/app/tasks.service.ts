import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    private _tasksUrl = 'http://localhost:3000/tasks';
    private _phaTasksUrl;

    constructor(private http: HttpClient) {
    }

    getTasks() {
        return this.http.get<any>(this._tasksUrl);
    }

    getProjectPhases(proId, phaId) {
        this._phaTasksUrl = 'http://localhost:3000/projects/' + proId + '/phases/' + phaId + '/tasks/';
        return this.http.get<any>(this._phaTasksUrl);
    }
}
