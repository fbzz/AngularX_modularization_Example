import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Import our pages
import { FinancesDashboardComponent } from './finances-dashboard/finances-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { ProdDashboardComponent } from './prod-dashboard/prod-dashboard.component';
import { ExecutiveDashboardComponent } from './executive-dashboard/executive-dashboard.component';

const routes: Routes = [
    { path: '', component: ExecutiveDashboardComponent },
    { path: 'finances', component: FinancesDashboardComponent },
    { path: 'human-resources', component: HrDashboardComponent },
    { path: 'production', component: ProdDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
