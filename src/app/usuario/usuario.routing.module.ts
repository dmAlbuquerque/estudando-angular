import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
    {
        path: '',
        component: UsuarioComponent
    },
    {
        path: 'add',
        component: UsuarioCadastroComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})


export class UsuarioRoutingModule { }
