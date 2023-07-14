import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AccordionExampleComponent} from './accordion-example.component';

const schemeRoutes: Routes = [
    {
        path: 'scheme',
        children: [
            {path: 'add', component: AccordionExampleComponent},
        ],
        canActivate: []
    }
];

@NgModule({
    declarations: [
        AccordionExampleComponent,
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(schemeRoutes)
    ],
    providers: [],
    exports: []
})
export class AccordionExampleModule {
}
