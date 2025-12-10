import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-description',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-description.component.html',
  styleUrl: './game-description.component.scss'
})
export class GameDescriptionComponent implements OnInit, OnChanges {

  cardAction = [
    {
      title: "You",
      description: "Wähle jemanden aus, der trinken muss."
    },
    {
      title: "Me",
      description: "Du selbst musst trinken."
    },
    {
      title: "Category",
      description: "Bestimme eine Kategorie. Jeder sagt reihum einen passenden Begriff."
    },
    {
      title: "Rhyme",
      description: "Sage ein Wort, die anderen müssen reimen. Wer scheitert, trinkt."
    },
    {
      title: "Mate",
      description: "Wähle einen Partner. Ihr trinkt immer gemeinsam."
    },
    {
      title: "Rule",
      description: "Erstelle eine neue Regel, die ab sofort gilt."
    },
    {
      title: "Question Master",
      description: "Wenn dir jemand eine Frage beantwortet, muss derjenige trinken."
    },
    {
      title: "Waterfall",
      description: "Alle trinken gleichzeitig. Du entscheidest, wann du aufhörst."
    }
  ];

  title = '';
  description = '';
  @Input() card!: string;


  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }

  }
}



