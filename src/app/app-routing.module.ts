import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerPageComponent } from './soccer-page/soccer-page.component';

const routes: Routes = [
  {
    title: 'Soccer page',
    path: '',
    component: SoccerPageComponent,
    // loadChildren: () =>
    //   import('./soccer-page/soccer-page.component').then(
    //     (m) => m.SoccerPageComponent
    //   ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
