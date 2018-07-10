import {Component, OnInit} from '@angular/core';
import {TasksService} from '../tasks.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    tasks = [];

    constructor(private _tasksService: TasksService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                if (params['selectedPhase']) {
                    this._tasksService.getProjectPhases(params['selectedProject'], params['selectedPhase'])
                        .subscribe(
                            res => {
                                console.log(res);
                                this.tasks = res._taskId;
                            },
                            err => console.log(err)
                        );
                } else {
                    this._tasksService.getTasks()
                        .subscribe(
                            res => this.tasks = res,
                            err => console.log(err)
                        );
                }

            });

    }
}
