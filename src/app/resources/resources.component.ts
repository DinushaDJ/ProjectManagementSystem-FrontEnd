import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../projects.service';
import {ResourcesService} from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

    resources = [];

    constructor(private  _resourceService: ResourcesService) { }

    ngOnInit() {
        this._resourceService.getResources()
            .subscribe(
                res => this.resources = res,
                err => console.log(err)
            );
    }
}
