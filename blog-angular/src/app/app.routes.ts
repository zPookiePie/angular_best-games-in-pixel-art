import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { getPrerenderParams } from '../prerender.config';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Rota padrão
  { path: 'content/:id', component: ContentComponent,
    data: {
      getPrerenderParams
    }
   } // Rota /content
];
