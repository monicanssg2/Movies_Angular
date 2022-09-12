import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbutComponent } from './about/abut.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent},
  {path:'about', canActivate:[AuthGuard], component:AbutComponent},
  {path:'contacts', canActivate:[AuthGuard], component:ContactsComponent},
  {
    path:'settings', 
    loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)
  },
  {path:'moviedetails/:id', canActivate:[AuthGuard], component:MoviedetailsComponent},
  {path:'movies', component:MoviesComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
