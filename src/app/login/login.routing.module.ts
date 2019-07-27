import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const loginRoutes = [];

@NgModule({
    imports:[RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule{}