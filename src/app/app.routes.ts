import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { AboutUs } from './pages/about-us/about-us';
import { Services } from './pages/services/services';

export const routes: Routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about-us',
        component: AboutUs
    },
    {
        path: '**',
        redirectTo: ''
    }
];
