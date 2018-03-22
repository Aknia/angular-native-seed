import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
// app
import { MenuItem } from './menu/menu.common';
import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";

@Component({
    moduleId: module.id,
    selector: 'maestro-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.about',
            link: ['/about']
        }
    ];

    constructor(translate: TranslateService, private router: RouterExtensions) {
        translate.setDefaultLang('en');
        translate.use('en');


        if (!isAndroid) {
            return;
        }

        application.android.on(application.AndroidApplication.activityBackPressedEvent, (data: application.AndroidActivityBackPressedEventData) => {
            this.router.back();
            data.cancel = true;
        });
    }
}
