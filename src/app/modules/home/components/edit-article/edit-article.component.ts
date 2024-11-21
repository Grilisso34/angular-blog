import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { Message } from 'src/app/models/message.model';
import { AddArticleService } from '../../services/add-article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
})
export class EditArticleComponent implements OnInit {
  currentArticleId = 1;
  currentArticle: Article;

  @Input() articles: Article[] = [];
  @Output() onArticleEdit = new EventEmitter<Article>();

  message: Message;

  constructor(private articleService: AddArticleService) {}

  ngOnInit(): void {
    this.message = new Message('success', '');
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
    this.onArticleChange();
  }

  onSubmit(form: NgForm) {
    const { title, date, description, url } = form.value;
    const article = new Article(
      title,
      date,
      description,
      url,
      +this.currentArticleId
    );
    this.articleService
      .updateArticles(article)
      .subscribe((article: Article) => {
        this.onArticleEdit.emit(article);
        this.showMessage({
          text: 'Статья изменена',
          type: 'success',
        });
        form.reset();
      });
  }

  onArticleChange() {
    this.currentArticle = this.articles.find(
      (i) => i.id === +this.currentArticleId
    );
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
