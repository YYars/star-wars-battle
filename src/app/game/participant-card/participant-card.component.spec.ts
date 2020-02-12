import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantCardComponent } from './participant-card.component';
import { mockStarship } from 'fixtures';
import { GameResult } from '../shared/game-result.enum';
import { AppModule } from 'src/app/app.module';

describe('ParticipantCardComponent', () => {
  let component: ParticipantCardComponent;
  let fixture: ComponentFixture<ParticipantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ParticipantCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantCardComponent);
    component = fixture.componentInstance;
    component.participant = mockStarship;
    component.result = GameResult.WIN;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
