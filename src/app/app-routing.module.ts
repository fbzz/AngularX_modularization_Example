import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: 'add', loadChildren: './course-add/add.module#AddModule' },
    { path: 'create', loadChildren: './course-create/create.module#AddModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
