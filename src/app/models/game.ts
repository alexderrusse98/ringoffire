export class Game {
  public players: string[] = ['Hans', 'Alex', 'Gustav'];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 0; i < 14; i++) {
      this.stack.push('spade_' + i);
      this.stack.push('heart_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
    }

    this.shuffle(this.stack);
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
