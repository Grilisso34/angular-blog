import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { Message } from 'src/app/models/message.model';
import { AddArticleService } from '../../services/add-article.service';

@Component({
  selector: 'app-add-atricle',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit {
  message: Message;

  @Output() onArticleAdd = new EventEmitter<Article>();
  constructor(private addArticle: AddArticleService) {}

  ngOnInit(): void {
    this.message = new Message('success', '');
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit(form: NgForm) {
    const { title, date, description, url } = form.value;
    const article = new Article(title, date, description, url);

    this.addArticle.addArticle(article).subscribe((article: Article) => {
      this.showMessage({
        text: 'Статья создана',
        type: 'success',
      });
      form.reset();
      this.onArticleAdd.emit(article);
    });
  }
}
