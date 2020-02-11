import { Component, OnInit, Input } from '@angular/core';
import { GameResult } from '../shared/game-result.enum';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {

  private readonly WINNER_COLOR: string = 'limegreen';
  private readonly LOSER_COLOR: string = 'crimson';

  @Input() participant;
  @Input() result: GameResult;

  constructor() { }

  ngOnInit(): void {
  }

  isStarship(): boolean {
    if ('pilots' in this.participant) {
      return true;
    }
    return false;
  }

  getResultStyle() {
    if (this.result === GameResult.WIN) {
      return this.WINNER_COLOR;
    } else {
      return this.LOSER_COLOR;
    }
  }

}
