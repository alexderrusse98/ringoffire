import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCards: string = '';
  game!: Game;

  constructor(public dialog: MatDialog) { }

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
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent)


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}