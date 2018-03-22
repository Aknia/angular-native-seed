import { Routes } from '@angular/router';
import { MainComponent } from './components/main.component'

export const MainRoutes: Routes = [
    {
        path: "",
        component: MainComponent,
        children: [
            { path: "home", loadChildren: "./app/home/home.module#HomeModule" },
            { path: "about", loadChildren: "./app/+about/about.module#AboutModule" }
        ]
    }
];
