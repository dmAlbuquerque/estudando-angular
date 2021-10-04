import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosComponent } from './estados.component';

const routes: Routes = [
    {
        path: '',
        component: EstadosComponent
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})


export class EstadosRoutingModule { }
