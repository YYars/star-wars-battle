import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameStarted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Switches from introduction view to game view
  onStartGame() {
    this.gameStarted = true;
  }

}
