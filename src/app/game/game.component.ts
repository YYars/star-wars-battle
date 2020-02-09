import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameStarted = false;

  // New values will be emited as soon as someone wins
  private playerLeftScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private playerRightScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Observables for score displaying with async pipe
  playerLeftScoreObs$: Observable<number> = this.playerLeftScore.asObservable();
  playerRightScoreObs$: Observable<number> = this.playerRightScore.asObservable();

  player1: false;
  player2: false;

  constructor() { }

  ngOnInit(): void {

  }

  // Switches from introduction view to game view
  onStartGame() {
    this.gameStarted = true;
  }

  onRollTheDice() {
    // TO-DO
  }

}
