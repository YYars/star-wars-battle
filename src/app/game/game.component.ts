import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from './game.service';
import { OpponentsTypes } from './models/opponents-types.enum';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private opponentType: OpponentsTypes = OpponentsTypes.CHARACTERS;
  gameStarted = false;

  // Observables for score displaying with async pipe
  leftScoreObs$: Observable<number>;
  rightScoreObs$: Observable<number>;

  player1: false;
  player2: false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.leftScoreObs$ = this.gameService.playerLeftScoreObs$;
    this.rightScoreObs$ = this.gameService.playerRightScoreObs$;
  }

  // Switches from introduction view to game view
  onStartGame() {
    this.gameStarted = true;
  }

  onRollTheDice() {
    // TO-DO
  }

  onChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.opponentType = OpponentsTypes.STARSHIPS;
    } else {
      this.opponentType = OpponentsTypes.CHARACTERS;
    }
  }

}
