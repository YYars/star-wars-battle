import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, CharacterPageResponse } from './models/character.model';
import { Starship, StarshipPageResponse } from './models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly SWAPI_BASE_URL = 'https://swapi.co/api';

  // There are no characters with id >= 90 and starships with id >= 60
  private readonly CHARACTERS_MAX_PAGES = 9;
  private readonly STARSHIPS_MAX_PAGES = 5;

  // New values will be emited as soon as someone wins
  private playerLeftScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private playerRightScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Observables for score displaying with async pipe
  playerLeftScoreObs$: Observable<number> = this.playerLeftScore.asObservable();
  playerRightScoreObs$: Observable<number> = this.playerRightScore.asObservable();

  constructor(private httpClient: HttpClient) { }

  private fetchCharactersPage(pageNumber: number): Observable<CharacterPageResponse> {
    return this.httpClient.get<CharacterPageResponse>(`${this.SWAPI_BASE_URL}/people/?page=${pageNumber}`);
  }

  private fetchStarshipsPage(id: number): Observable<StarshipPageResponse> {
    return this.httpClient.get<StarshipPageResponse>(`${this.SWAPI_BASE_URL}/starships/?page=${id}`);
  }

  /**
   * Returns random page number from given range excluding 0. Number will be used to
   * fetch random page from swapi
   */
  private getRandomPageNumber(maxRange: number): number {
    return Math.floor(Math.random() * (maxRange - 1)) + 1;
  }

  /**
   * Returns random number from given range. Number will be used to
   * get random object from array
   */
  private getRandomEntityNumber(maxRange: number): number {
    return Math.floor(Math.random() * maxRange);
  }

  /**
   * Checking which character has bigger height value and updating score.
   * If height values are even, each participant will have point as winner.
   * @param resultArray Characters array with 2 objects
   */
  chooseCharacterWinner(resultArray: Character[]) {
    // Getting current score values to increment them after
    const currentLeftScore: number = this.playerLeftScore.value;
    const currentRightScore: number = this.playerRightScore.value;

    const leftPlayerHeight: number = +resultArray[0].height ? +resultArray[0].height : 0;
    const rightPlayerHeight: number = +resultArray[1].height ? +resultArray[1].height : 0;

    if (leftPlayerHeight === rightPlayerHeight) {
      // Updating scores
      this.updateScore(currentLeftScore + 1, currentRightScore + 1);
    } else if (leftPlayerHeight > rightPlayerHeight) {
      this.updateScore(currentLeftScore + 1, currentRightScore);
    } else {
      this.updateScore(currentLeftScore, currentRightScore + 1);
    }
  }

  private updateScore(leftScore: number, rightScore: number) {
    this.playerLeftScore.next(leftScore);
    this.playerRightScore.next(rightScore);
  }

  /**
   * Checking which starship has bigger crew value and updating score.
   * If crew values are even, each participant will have point as winner.
   * @param resultArray Starships array with 2 objects
   */
  chooseStarshipWinner(resultArray: Starship[]) {
    // Getting current score values to increment them after
    const currentLeftScore: number = this.playerLeftScore.value;
    const currentRightScore: number = this.playerRightScore.value;

    const leftPlayerCrew: number = +resultArray[0].crew ? +resultArray[0].crew : 0;
    const rightPlayerCrew: number = +resultArray[1].crew ? +resultArray[1].crew : 0;

    if (leftPlayerCrew === rightPlayerCrew) {
      // Updating scores
      this.updateScore(currentLeftScore + 1, currentRightScore + 1);
    } else if (leftPlayerCrew > rightPlayerCrew) {
      this.updateScore(currentLeftScore + 1, currentRightScore);
    } else {
      this.updateScore(currentLeftScore, currentRightScore + 1);
    }
  }

  /**
   * Fetching random characters page, then get random entity from response array.
   * @return An observable with Character object.
   */
  private fetchRandomCharacter(): Observable<Character> {
    const pageNumber = this.getRandomPageNumber(this.CHARACTERS_MAX_PAGES);
    return this.fetchCharactersPage(pageNumber)
      .pipe(
        map((resp: CharacterPageResponse) => {
          // Get random character from array, by generating random number knowing array length
          const randomEntityNumber = this.getRandomEntityNumber(resp.results.length);
          return resp.results[randomEntityNumber];
        }));
  }

  /**
   * Fetching random starships page, then get random entity from response array.
   * @return An observable with Starship object.
   */
  private fetchRandomStarship(): Observable<Starship> {
    const pageNumber = this.getRandomPageNumber(this.STARSHIPS_MAX_PAGES);
    return this.fetchStarshipsPage(pageNumber)
      .pipe(
        map((resp: StarshipPageResponse) => {
          // Get random starship from array, by generating random number knowing array length
          const randomEntityNumber = this.getRandomEntityNumber(resp.results.length);
          return resp.results[randomEntityNumber];
        }));
  }

  getRandomCharacters(): Observable<Character[]> {
    return forkJoin([this.fetchRandomCharacter(), this.fetchRandomCharacter()]);
  }

  getRandomStarships(): Observable<Starship[]> {
    return forkJoin([this.fetchRandomStarship(), this.fetchRandomStarship()]);
  }
}
