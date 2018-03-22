// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    HomeRoutingModule,
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    HomeComponent
];
