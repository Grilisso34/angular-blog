import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditingComponent } from './components/editing/editing.component';
import { HomeComponent } from './components/home/home.component';
import { AtriclePageComponent } from './pages/atricle-page/atricle-page.component';
import { AtriclesPageComponent } from './pages/atricles-page/atricles-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'articles',
        component: AtriclesPageComponent,
      },
      {
        path: 'add',
        component: AddArticleComponent,
      },
      {
        path: 'edit',
        component: EditingComponent,
      },
      {
        path: 'article/:id',
        component: AtriclePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
