import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantCardComponent } from './participant-card.component';
import { mockStarship } from 'fixtures';
import { GameResult } from '../shared/game-result.enum';
import { AppModule } from 'src/app/app.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ParticipantCardComponent', () => {
  let component: ParticipantCardComponent;
  let fixture: ComponentFixture<ParticipantCardComponent>;
  let debugElement: DebugElement;

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
    debugElement = fixture.debugElement;
    component.participant = mockStarship;
    component.result = GameResult.WIN;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show red text if participant have lost the battle', () => {
    component.participant = mockStarship;
    component.result = GameResult.LOSE;
    fixture.detectChanges();
    const description = debugElement.query(By.css('mat-card-subtitle')).query(By.css('h1')).nativeElement;
    expect(description.style.color).toEqual('crimson');
  });
});
