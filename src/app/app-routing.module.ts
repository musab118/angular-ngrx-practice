import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'counter', component: MyCounterComponent },
  { path: 'weather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
