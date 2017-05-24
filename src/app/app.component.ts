import { Component } from '@angular/core';
import { FlashCardService } from './flashcards/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FlashCardService ]
})
export class AppComponent {
  title = 'Swipe Alphabet!';
}
