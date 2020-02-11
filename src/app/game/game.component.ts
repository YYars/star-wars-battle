import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from './game.service';
import { ParticipantTypes } from './models/participants-types.enum';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Character } from './models/character.model';
import { Starship } from './models/starship.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private participantType: ParticipantTypes = ParticipantTypes.CHARACTERS;
  gameStarted = false;

  // Observables for score displaying with async pipe
  leftScoreObs$: Observable<number>;
  rightScoreObs$: Observable<number>;

  playerLeft: Character | Starship;
  playerRight: Character | Starship;

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
    switch (this.participantType) {
      case (ParticipantTypes.CHARACTERS):
        this.gameService.getRandomCharacters().subscribe(
          (resultArray: Character[]) => {
            this.gameService.chooseCharacterWinner(resultArray);
            this.playerLeft = resultArray[0];
            this.playerRight = resultArray[1];
          }
        );
        break;
      case (ParticipantTypes.STARSHIPS):
        this.gameService.getRandomStarships().subscribe(
          (resultArray: Starship[]) => {
            this.gameService.chooseStarshipWinner(resultArray);
            this.playerLeft = resultArray[0];
            this.playerRight = resultArray[1];
          }
        );
    }
  }

  onChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.participantType = ParticipantTypes.STARSHIPS;
    } else {
      this.participantType = ParticipantTypes.CHARACTERS;
    }
  }

}
