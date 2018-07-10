import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {PhasesComponent} from './phases/phases.component';
import {TasksComponent} from './tasks/tasks.component';
import {ResourcesComponent} from './resources/resources.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'project/phases',
        component: PhasesComponent
    },
    {
        path: 'phases',
        component: PhasesComponent
    },
    {
        path: 'phase/tasks',
        component: TasksComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'project/phase/tasks',
        component: TasksComponent
    },
    {
        path: 'resources',
        component: ResourcesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
