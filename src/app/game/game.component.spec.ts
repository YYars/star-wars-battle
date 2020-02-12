import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { DebugElement } from '@angular/core';
import { AppModule } from '../app.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GameService } from './game.service';
import { of } from 'rxjs';
import { GameResult } from './shared/game-result.enum';

describe('GameComponent', () => {
  let component: GameComponent;
  let debugElement: DebugElement;
  let gameService: any;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    const gameServiceSpy = jasmine.createSpyObj(
      'GameService',
      ['getRandomCharacters', 'getRandomStarships', 'chooseStarshipWinner', 'chooseCharacterWinner']);
    TestBed.configureTestingModule({
      imports: [AppModule, NoopAnimationsModule],
      declarations: [GameComponent],
      providers: [
        { provide: GameService, useValue: gameServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    gameService = debugElement.injector.get(GameService);
    // Initializing score since subscription is in NgOnInit
    gameService.playerLeftResultObs$ = of(GameResult.WIN);
    gameService.playerRightResultObs$ = of(GameResult.WIN);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
