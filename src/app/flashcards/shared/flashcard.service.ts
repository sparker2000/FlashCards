import { Injectable } from '@angular/core';
import { FLASHCARDS } from './mock-flashcards';

@Injectable()
export class FlashCardService {
  getFlashCards() {
    return Promise.resolve(FLASHCARDS);
  }
}