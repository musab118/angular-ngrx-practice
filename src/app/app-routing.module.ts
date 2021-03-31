import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'counter', component: MyCounterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
