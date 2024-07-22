import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: 'elements', 
    loadChildren:() => 
      import('./elements/elements.module').then(m => m.ElementsModule) // Lazy loading
  },
  {path:'collections',
      loadChildren:() =>
        import('./collections/collections.module').then(m => m.CollectionsModule) // Lazy loading
  },
  {path: 'views', 
    loadChildren:() => 
      import('./views/views.module').then(m => m.ViewsModule) // In the App routing module, add a rule to Lazy load the viewModule when ever a user navigates to view
  },
  {path:'mods',
      loadChildren:() =>
        import('./mods/mods.module').then(m => m.ModsModule) // Lazy loading
  },
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
