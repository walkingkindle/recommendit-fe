import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../../Models/Show';
import { environment } from '../../../environments/environment.development';
import { Result } from '../../helpers/result';

@Injectable({
  providedIn: 'root',
})

export class ShowService {
  showIds:number[];
  selectedShows:Show[];
  private apiUrl = 'https://localhost:7054/api/shows/'

constructor(private http:HttpClient) {
  this.showIds = [];
  this.selectedShows  = [];
 }

getRecordsByInput(input:string):Observable<Result<Show[]>>{
  return this.http.get<Result<Show[]>>(`${this.apiUrl}search/${input}`)
}
getRecordsById(id:number):Observable<Result<Show>>{
  return this.http.get<Result<Show>>(`${this.apiUrl}${id}`)
}
getRecommendedShowsFromInput(showIds:number[]):Observable<Show[]>{
  const headers = new HttpHeaders({'Content-Type':'application/json'})
  const options = {headers:headers, withCredentials:true}

  return this.http.post<Show[]>(`${this.apiUrl}suggest/`,showIds,options);
}

}
