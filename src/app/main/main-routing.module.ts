// angular
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
// app
import { MainRoutes } from './main.routes';

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(<any>MainRoutes),
    ],
    exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }
