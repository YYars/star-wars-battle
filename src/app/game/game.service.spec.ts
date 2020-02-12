import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GameService } from './game.service';
import { mockStarshipsPage, mockCharactersPage, mockCharacter, mockStarship } from 'fixtures';
import { GameResult } from './shared/game-result.enum';

describe('GameService', () => {
  let gameService: GameService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    gameService = TestBed.inject(GameService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(gameService).toBeTruthy();
  });

  it('should fetch 2 starships', () => {
    spyOn<any>(gameService, 'getRandomPageNumber').and.returnValue(2);
    spyOn<any>(gameService, 'getRandomEntityNumber').and.returnValue(0);
    gameService.getRandomStarships().subscribe(resp => {
      expect(resp[0]).toEqual(mockStarshipsPage.results[0]);
      expect(resp[1]).toEqual(mockStarshipsPage.results[0]);
    });
    const req = httpTestingController.match('https://swapi.co/api/starships/?page=2');
    expect(req[0].request.method).toEqual('GET');
    expect(req[1].request.method).toEqual('GET');

    req[0].flush(mockStarshipsPage);
    req[1].flush(mockStarshipsPage);

  });

  it('should fetch 2 characters', () => {
    spyOn<any>(gameService, 'getRandomPageNumber').and.returnValue(2);
    spyOn<any>(gameService, 'getRandomEntityNumber').and.returnValue(0);
    gameService.getRandomCharacters().subscribe(resp => {
      expect(resp[0]).toEqual(mockCharactersPage.results[0]);
      expect(resp[1]).toEqual(mockCharactersPage.results[0]);
    });
    const req = httpTestingController.match('https://swapi.co/api/people/?page=2');
    expect(req[0].request.method).toEqual('GET');
    expect(req[1].request.method).toEqual('GET');

    req[0].flush(mockCharactersPage);
    req[1].flush(mockCharactersPage);

  });

  describe('Starship battle', () => {
    let updateScoreSpy;
    let updateWinnerSpy;

    beforeEach(() => {
      updateScoreSpy = spyOn<any>(gameService, 'updateScore');
      updateWinnerSpy = spyOn<any>(gameService, 'updateWinner');
    });

    it('should give each participant 1 score point in case if data is equal', () => {
      gameService.chooseStarshipWinner([mockStarship, mockStarship]);
      expect(updateScoreSpy).toHaveBeenCalledTimes(1);
      expect(updateScoreSpy).toHaveBeenCalledWith(1, 1);

    });

    it('should give 1 score point to left player in case if he has greater crew', () => {
      gameService.chooseStarshipWinner([mockStarshipsPage.results.slice()[0], mockStarship]);

      expect(updateScoreSpy).toHaveBeenCalledTimes(1);
      expect(updateScoreSpy).toHaveBeenCalledWith(1, 0);

    });

    it('should give 1 score point to right player in case if he has greater crew', () => {
      gameService.chooseStarshipWinner([mockStarship, mockStarshipsPage.results.slice()[0]]);

      expect(updateScoreSpy).toHaveBeenCalledTimes(1);
      expect(updateScoreSpy).toHaveBeenCalledWith(0, 1);

    });

    it('should give a win to both players in case if they have equal crew', () => {
      gameService.chooseStarshipWinner([mockStarship, mockStarship]);
      expect(updateWinnerSpy).toHaveBeenCalledTimes(1);
      expect(updateWinnerSpy).toHaveBeenCalledWith(GameResult.WIN, GameResult.WIN);

    });

    it('should give a win to left player in case if he has greater crew', () => {
      gameService.chooseStarshipWinner([mockStarshipsPage.results.slice()[0], mockStarship]);
      expect(updateWinnerSpy).toHaveBeenCalledTimes(1);
      expect(updateWinnerSpy).toHaveBeenCalledWith(GameResult.WIN, GameResult.LOSE);

    });

    it('should give a win to right player in case if he has greater crew', () => {
      gameService.chooseStarshipWinner([mockStarship, mockStarshipsPage.results.slice()[0]]);
      expect(updateWinnerSpy).toHaveBeenCalledTimes(1);
      expect(updateWinnerSpy).toHaveBeenCalledWith(GameResult.LOSE, GameResult.WIN);

    });
  });

  describe('Characters battle', () => {
    let updateScoreSpy;
    let updateWinnerSpy;

    beforeEach(() => {
      updateScoreSpy = spyOn<any>(gameService, 'updateScore');
      updateWinnerSpy = spyOn<any>(gameService, 'updateWinner');
    });

    it('should give 1 score point to each participant in case if characters heights are equal', () => {
      gameService.chooseCharacterWinner([mockCharacter, mockCharacter]);
      expect(updateScoreSpy).toHaveBeenCalledTimes(1);
      expect(updateScoreSpy).toHaveBeenCalledWith(1, 1);

    });

    it('should give 1 score point to left player in case if he has greater height', () => {
      gameService.chooseCharacterWinner([mockCharactersPage.results.slice()[3], mockCharacter]);

      expect(updateScoreSpy).toHaveBeenCalledTimes(1);
      expect(updateScoreSpy).toHaveBeenCalledWith(1, 0);

    });

    it('should give 1 score point to right player in case if he has greater height', () => {
      gameService.chooseCharacterWinner([mockCharacter, mockCharactersPage.results.slice()[3]]);

      expect(updateScoreSpy).toHaveBeenCalledTimes(1);
      expect(updateScoreSpy).toHaveBeenCalledWith(0, 1);

    });

    it('should give a win to both players in case if they have equal height', () => {
      gameService.chooseCharacterWinner([mockCharacter, mockCharacter]);
      expect(updateWinnerSpy).toHaveBeenCalledTimes(1);
      expect(updateWinnerSpy).toHaveBeenCalledWith(GameResult.WIN, GameResult.WIN);

    });

    it('should give a win to left player in case if he has greater height', () => {
      gameService.chooseCharacterWinner([mockCharactersPage.results.slice()[3], mockCharacter]);
      expect(updateWinnerSpy).toHaveBeenCalledTimes(1);
      expect(updateWinnerSpy).toHaveBeenCalledWith(GameResult.WIN, GameResult.LOSE);

    });

    it('should give a win to right player in case if he has greater height', () => {
      gameService.chooseCharacterWinner([mockCharacter, mockCharactersPage.results.slice()[3]]);
      expect(updateWinnerSpy).toHaveBeenCalledTimes(1);
      expect(updateWinnerSpy).toHaveBeenCalledWith(GameResult.LOSE, GameResult.WIN);

    });
  });


});
