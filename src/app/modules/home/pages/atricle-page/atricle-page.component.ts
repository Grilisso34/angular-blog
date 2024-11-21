import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { AddArticleService } from '../../services/add-article.service';

@Component({
  selector: 'app-atricle-page',
  templateUrl: './atricle-page.component.html',
  styleUrls: ['./atricle-page.component.css'],
})
export class AtriclePageComponent implements OnInit {
  article: Article;
  isDeleting = false;
  deleteError: string;
  deleteId: number;
  public articles = [];

  constructor(
    private articleService: AddArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articleService.fromArray();
    this.getArticle();
  }

  getArticle() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService
      .getArticle(id)
      .subscribe((article) => (this.article = article));
  }

  onDelete(article: Article) {
    this.articleService.deleteArticle(article).subscribe((i) => {
      this.articles = this.articles.filter((article) => article.id !== article);
      this.router.navigate(['articles']);
    });
  }
}
