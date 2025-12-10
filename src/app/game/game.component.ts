import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCards: string = '';
  game!: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game);

  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCards = this.game.stack.pop() || '';
      this.pickCardAnimation = true;

      console.log('New Card: ' + this.currentCards);
      console.log(this.currentCards);

      setTimeout(() => {
        this.game.playedCards.push(this.currentCards);
        this.pickCardAnimation = false;
      }, 1000);
    }


  }
}
