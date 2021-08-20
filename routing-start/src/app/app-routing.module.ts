import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
 
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
  
    { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [ // THE CanActivate will make sure that the servers path and the children gets showed only if authGuard is true
      { path: ':id', component: ServerComponent},
      { path: ':id/edit', component: EditServerComponent }
    ] },
    { path: 'not-found', component:PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found', pathMatch:'full'}// os ** indicam todas urls erradas possiveis e sempre colocar esta linha de codigo por ultimo pois a maquina le de cima para baixo ...
    
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes )
    ],
    exports: [
        RouterModule
    ]
})

export class appRoutingModule {

}