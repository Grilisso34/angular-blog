import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class AddArticleService {
  private ArticleURL = `http://localhost:3000/articles`;

  constructor(private http: HttpClient) {}

  addArticle(article: Article) {
    return this.http.post(`http://localhost:3000/articles`, article);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles`);
  }

  public articles = [];
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  fromArray() {
    this.getArticles().subscribe((data) => (this.articles = data));
  }

  updateArticles(article: Article) {
    return this.http.put(
      `http://localhost:3000/articles/${article.id}`,
      article
    );
  }

  deleteArticle(article: Article): Observable<Article> {
    const url = `${this.ArticleURL}/${article.id}`;
    return this.http.delete<Article>(url);
  }
}
