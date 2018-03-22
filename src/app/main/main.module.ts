import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// app
import { MainComponent } from './components/main.component';
import { SHARED_MODULES } from './main.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [MainComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule {

    constructor( @Optional() @SkipSelf() parentModule: MainModule) {
        if (parentModule) {
            throw new Error('MainModule already loaded; Import in root module only.');
        }
    }
}
