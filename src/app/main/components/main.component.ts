import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
// app
import { MenuItem } from '../../menu/menu.common';

@Component({
    moduleId: module.id,
    selector: 'Main',
    templateUrl: './main.component.html',
})
export class MainComponent {

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/main/home']
        },
        {
            title: 'menu.about',
            link: ['/main/about']
        }
    ];

    constructor(translate: TranslateService) {
    }
}
