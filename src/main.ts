import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TodoAppComponent } from './app/todo-app/';
import { environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoAppComponent);
