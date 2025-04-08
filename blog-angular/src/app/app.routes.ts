import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Rota padrão
  { path: 'content/:id', component: ContentComponent } // Rota /content
];
