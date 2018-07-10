import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../projects.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    projects = [];

    constructor(private  _projectService: ProjectsService,
                private  _router: Router,
                private route: ActivatedRoute,
                private auth: AuthService,
                private flash: FlashMessagesService
    ) {
    }

    ngOnInit() {

        const userId = this.auth.getUser()._id;

        this._projectService.getUserProjects(userId)
            .subscribe(res => {

                    console.log(res);
                    this.projects = res.data;
                    console.log(res.data);
                },
                err => {
                    if (err instanceof HttpResponse) {
                        if (err.status === 401) {
                            console.log(err);
                            this._router.navigate(['/login']);
                        }
                    }
                }
                // console.log(err)
            );
        // this._projectService.getProjects()
        //     .subscribe(
        //         res => this.projects = res,
        //         err => console.log(err)
        //     );
    }

    getProjectPhases(id) {
        console.log(id);
        this._router.navigate(['/project/phases'], {queryParams: {selectedProject: id}});
    }

    deleteProject(id) {
        this._projectService.deleteProject(id)
            .subscribe(
                res => {
                    this._router.navigate(['/projects/']);
                    this.flash.show(res.message, {cssClass: 'alert alert-success', timeout: 3000});
                    console.log('Deleted');
                },
                err => console.log(err)
            );
    }
}
