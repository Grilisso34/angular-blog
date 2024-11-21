import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { AddArticleService } from '../../services/add-article.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
})
export class EditingComponent implements OnInit {
  articles: Article[] = [];
  isLoaded = false;

  constructor(private articleService: AddArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
      this.isLoaded = true;
    });
  }

  newArtilceAdded(article: Article) {
    this.articles.push(article);
  }
}
