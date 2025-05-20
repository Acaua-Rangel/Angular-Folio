import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Acauã - Sobre',
        component: HomeComponent
    },
    {
        path: 'curriculo',
        title: 'Acauã - Curriculo',
        component: CurriculumComponent
    },
    {
        path: 'contato',
        title: 'Acauã - Contato',
        component: ContatoComponent
    }
];
