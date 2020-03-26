import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './component/body/body.component'
import { MotosComponent} from './component/motos/motos.component'
import { AboutComponent} from './component/about/about.component'


const routes: Routes = [
  { path:'Home', component: BodyComponent },
  { path:'Moto', component: MotosComponent },
  { path:'About', component: AboutComponent },
  { path: '**', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
