import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadComponent: () => import('./pages/auth/auth.component'),
        children: [
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            },
            {
                path: 'register',
                loadComponent: () => import('./pages/auth/views/register/register.component'),
            },
            {
                path:'login',
                loadComponent:()=>import('./pages/auth/views/login/login.component'),
            }
        ]
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'error404',
        loadComponent: () => import('./pages/error404/error404.component')
    }
];
