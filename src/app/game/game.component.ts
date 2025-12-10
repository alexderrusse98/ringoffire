import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
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
    this.currentCards = this.game.stack.pop() || '';
    this.pickCardAnimation = true;
  }
}
