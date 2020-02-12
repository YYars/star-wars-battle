import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { DebugElement } from '@angular/core';
import { AppModule } from '../app.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { GameService } from './game.service';
import { of } from 'rxjs';
import { GameResult } from './shared/game-result.enum';
import { By } from '@angular/platform-browser';
import { mockStarship, mockCharacter } from 'fixtures';

describe('GameComponent', () => {
  let component: GameComponent;
  let debugElement: DebugElement;
  let gameService: any;
  let fixture: ComponentFixture<GameComponent>;
  let loader: HarnessLoader;

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
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const title = debugElement.query(By.css('.title')).query(By.css('h1'));
    expect(title).toBeTruthy();
  });

  it('should display intoduction description by default', () => {
    const description = debugElement.query(By.css('#description'));
    expect(description).toBeTruthy();
  });

  it('should display "Start Game!" button by default', () => {
    const startButtonText = debugElement
      .query(By.css('button'))
      .query(By.css('span')).nativeNode.innerText;

    expect(startButtonText).toEqual('Start Game!');
  });

  it('playerLeftResult should be the same as in game service', () => {
    expect(component.playerLeftResult).toEqual(GameResult.WIN);
  });

  it('playerRightResult should be the same as in game service', () => {
    expect(component.playerRightResult).toEqual(GameResult.WIN);
  });

  describe('After game start - when "Start Game!" button is already clicked', () => {
    let rollTheDiceButton: MatButtonHarness;
    let slider: MatSlideToggleHarness;

    beforeEach(async () => {
      const startButton = debugElement.query(By.css('button')).nativeElement;

      startButton.click();

      fixture.detectChanges();

      rollTheDiceButton = await loader.getHarness(MatButtonHarness);
      slider = await loader.getHarness(MatSlideToggleHarness);
    });

    it('gameStarted flag is switching after clicking on "Start Game!" button', () => {
      expect(component.gameStarted).toBeTruthy();
    });

    describe('After slider has been toggled', () => {
      beforeEach(async () => {
        await slider.toggle();
      });

      it('should call getRandomStarships in rolltheDice method if slider was toggled', async () => {

        gameService.getRandomStarships.and.returnValue(of([mockStarship, mockStarship]));

        const isSliderChecked = await slider.isChecked();

        expect(isSliderChecked).toBeTruthy();

        await rollTheDiceButton.click();

        expect(gameService.getRandomStarships).toHaveBeenCalled();
      });

      it('should call getRandomCharacters in rolltheDice method if slider was toggled twice', async () => {

        gameService.getRandomCharacters.and.returnValue(of([mockCharacter, mockCharacter]));

        await slider.toggle();

        const isSliderChecked = await slider.isChecked();

        expect(isSliderChecked).toBeFalsy();

        await rollTheDiceButton.click();

        expect(gameService.getRandomCharacters).toHaveBeenCalled();
      });
    });

    it('should call getRandomCharacters in rolltheDice method if slider was not touched', async () => {

      gameService.getRandomCharacters.and.returnValue(of([mockCharacter, mockCharacter]));

      const isSliderChecked = await slider.isChecked();

      expect(isSliderChecked).toBeFalsy();

      await rollTheDiceButton.click();

      expect(gameService.getRandomCharacters).toHaveBeenCalled();
    });

    it('should not display introduction description after clicking "Start Game!" button', () => {

      const description = debugElement.query(By.css('#description'));

      expect(description).toBeNull();
    });

    it('should not display "Start Game!" button after clicking on it', () => {

      const startButtonAfter = debugElement.query(By.css('#start-game-button'));

      expect(startButtonAfter).toBeNull();
    });
  });
});
