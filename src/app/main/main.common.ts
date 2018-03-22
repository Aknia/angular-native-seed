// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { MainRoutingModule } from './main-routing.module';
import { MenuModule } from '../menu/menu.module';

export const SHARED_MODULES: any[] = [
    SharedModule,
    MenuModule,
    MainRoutingModule,
    TranslateModule.forChild()
];
