import {Component, OnInit} from '@angular/core';
import {PhasesService} from '../phases.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-phases',
    templateUrl: './phases.component.html',
    styleUrls: ['./phases.component.css']
})
export class PhasesComponent implements OnInit {

    phases = [];

    constructor(private  _phaseService: PhasesService,
                private route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                if (params['selectedProject']) {
                    this._phaseService.getProjectPhases(params['selectedProject'])
                        .subscribe(
                            res => {
                                console.log(res);
                                this.phases = res._phaseId;
                            },
                            err => console.log(err)
                        );
                } else {
                    this._phaseService.getPhases()
                        .subscribe(
                            res => this.phases = res,
                            err => console.log(err)
                        );
                }
            });
    }

    getPhaseTasks(id) {
        console.log(id);
        this.route
            .queryParams
            .subscribe(params => {
                this._router.navigate(['/project/phase/tasks'], {
                    queryParams: {
                        selectedProject: params['selectedProject'],
                        selectedPhase: id
                    }
                });

            });
    }
}
