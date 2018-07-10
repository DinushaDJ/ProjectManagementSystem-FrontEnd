import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private _projectsUrl = 'http://localhost:3000/projects';
    private _userUrl = 'http://localhost:3000/';

    constructor(private http: HttpClient) {
    }

    getProjects() {
        return this.http.get<any>(this._projectsUrl);
    }

    getUserProjects(userId) {
        const url = this._userUrl + 'users/' + userId + '/projects';

        console.log(url);

        return this.http.get<any>(url);
    }

    deleteProject(projectId) {
        const url = this._projectsUrl + '/' + projectId + '/delete';

        console.log(url);

        return this.http.delete<any>(url);
    }
}
