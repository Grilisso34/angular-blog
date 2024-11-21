import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AtriclePageComponent } from './pages/atricle-page/atricle-page.component';
import { AtriclesPageComponent } from './pages/atricles-page/atricles-page.component';

import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddArticleService } from './services/add-article.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditingComponent } from './components/editing/editing.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AtriclePageComponent,
    AtriclesPageComponent,
    AddArticleComponent,
    AddArticleComponent,
    HomeComponent,
    EditArticleComponent,
    EditingComponent,
    DropdownDirective,
    SearchPipe,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [AddArticleService],
})
export class HomeModule {}
