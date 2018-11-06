import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Subscription } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-transfer-example',
  templateUrl: './transfer-example.component.html',
})
export class TransferExampleComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  posts: Post[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      console.log('I am on browser side! :-)');
    }

    if (isPlatformServer(this.platformId)) {
      console.log('I am on server side! :-)');
    }

    this.subscription = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((posts) => {
      this.posts = posts;
    });

    window.console.log(window.location.href);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
