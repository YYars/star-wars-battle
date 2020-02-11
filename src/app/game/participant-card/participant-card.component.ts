import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {

  @Input() participant;

  constructor() { }

  ngOnInit(): void {
  }

  isStarship(): boolean {
    if ('pilots' in this.participant) {
      return true;
    }
    return false;
  }

}
