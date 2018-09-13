import { HomeComponent } from './componet/pages/home/home.component';
import { BlogComponent } from './componet/blog/blog.component';
import { DashboardComponent } from './componet/admin/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes = [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      }
];