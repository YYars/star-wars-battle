import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from './models/character.model';
import { Starship } from './models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly SWAPI_BASE_URL = 'https://swapi.co/api';

  // There are no characters with id >= 90 and starships with id >= 60
  private readonly CHARACTERS_RANGE = 90;
  private readonly STARSHIPS_RANGE = 60;

  // New values will be emited as soon as someone wins
  private playerLeftScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private playerRightScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Observables for score displaying with async pipe
  playerLeftScoreObs$: Observable<number> = this.playerLeftScore.asObservable();
  playerRightScoreObs$: Observable<number> = this.playerRightScore.asObservable();

  constructor(private httpClient: HttpClient) { }

  private fetchCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.SWAPI_BASE_URL}/people/${id}`);
  }

  private fetchStarship(id: number): Observable<Starship> {
    return this.httpClient.get<Starship>(`${this.SWAPI_BASE_URL}/starships/${id}`);
  }

  /**
   * Returns random id number from given range. Number will be used for
   * finding random entity from swapi
   */
  private getRandomIdNumber(maxRange: number): number {
    return Math.floor(Math.random() * maxRange);
  }

  private fetchRandomCharacter(): Observable<Character> {
    const randNumber = this.getRandomIdNumber(this.CHARACTERS_RANGE);
    return this.fetchCharacter(randNumber);
  }

  /**
   * Fetching starship data by randomly generated id. If there's no data about starship
   * for given id, then function retries to fetch with another generated number.
   * @return An observable with Starship object.
   */
  private fetchRandomStarship(): Observable<Starship> {
    const randNumber = this.getRandomIdNumber(this.STARSHIPS_RANGE);
    return this.fetchStarship(randNumber).pipe(catchError(err => this.fetchRandomStarship()));
  }

  getRandomCharacters(): Observable<Character[]> {
    return forkJoin([this.fetchRandomCharacter(), this.fetchRandomCharacter()]);
  }

  getRandomStarships(): Observable<Starship[]> {
    return forkJoin([this.fetchRandomStarship(), this.fetchRandomStarship()]);
  }
}
