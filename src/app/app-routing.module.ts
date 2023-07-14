import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionExampleComponent} from "./accordian-example/accordion-example.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},

    // navigation routes

    {path: 'home', component: AccordionExampleComponent},

    // routes for functional areas

    {
        path: 'scheme', loadChildren: () => {
            return importSchemeModule();
        }
    }

    // catch all
];

async function importSchemeModule() {
    const m = await import('./accordian-example/accordion-example.module');
    return m.AccordionExampleModule;
}

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}