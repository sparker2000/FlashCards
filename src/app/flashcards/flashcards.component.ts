import { Component, OnInit } from '@angular/core';
import { FlashCard, FlashCardService } from './shared';

@Component({
  selector: 'flash-cards',
  moduleId: module.id,
  templateUrl: 'flashcards.component.html',
  styleUrls: ['flashcards.component.css']
})
export class FlashCardsComponent implements OnInit {
  // constant for swipe action: left or right
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  flashCards: FlashCard[] = [];

  constructor(private flashCardService: FlashCardService) {
  }

  ngOnInit() {
    this.flashCardService.getFlashCards()
      .then(flashCards => this.flashCards = flashCards);
  }

  // action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
      // out of range
      if (currentIndex > this.flashCards.length || currentIndex < 0) return;

      let nextIndex = 0;

      // swipe left
      if (action === this.SWIPE_ACTION.LEFT) {
          const isLast = currentIndex === this.flashCards.length - 1;
          nextIndex = isLast ? 0 : currentIndex + 1;
      }

      // swipe right
      if (action === this.SWIPE_ACTION.RIGHT) {
          const isFirst = currentIndex === 0;
          nextIndex = isFirst ? this.flashCards.length - 1 : currentIndex - 1;
      }

      // toggle avatar visibility
      this.flashCards.forEach((x, i) => x.visible = (i === nextIndex));
  }
}