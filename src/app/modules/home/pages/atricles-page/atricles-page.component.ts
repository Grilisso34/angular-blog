import { Component, OnInit } from '@angular/core';
import { AddArticleService } from '../../services/add-article.service';

@Component({
  selector: 'app-atricles-page',
  templateUrl: './atricles-page.component.html',
  styleUrls: ['./atricles-page.component.css'],
})
export class AtriclesPageComponent implements OnInit {
  constructor(private showArticles: AddArticleService) {}

  articlesLinks = [];
  isLoaded = false;

  searchPlaceholder = '';
  searchValue = '';
  searchField = 'params';

  ngOnInit(): void {
    this.showArticles
      .getArticles()
      .subscribe((data) => (this.articlesLinks = data));
    this.isLoaded = true;
  }

  searchParams(field: string) {
    const params = {
      title: 'Заголовок',
      date: 'Дата',
      id: 'Номер',
    };
    this.searchPlaceholder = params[field];
    this.searchField = field;
  }
}
