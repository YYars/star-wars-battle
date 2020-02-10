import { Component, OnInit, Input } from '@angular/core';
import { Starship } from '../models/starship.model';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
