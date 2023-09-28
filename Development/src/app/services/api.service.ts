import { HttpClient, HttpContext, HttpContextToken, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const IS_GLOBAL_REQUEST = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  public get(route: string) {
    return this.http.get(this.createCompleteRoute(route), this.generateHeaders());
  }
  public create(route: string, body: any): Observable<any> {
    return this.http.post(this.createCompleteRoute(route), body, this.generateHeaders()
    );
  }

  public retrieve(route: string, body: any): Observable<any> {
    return this.http.post(this.createCompleteRoute(route), body, this.generateHeaders());
  }

  private createCompleteRoute(route: string) {
    const restUrl = environment.restUrl;
    return `${restUrl}/${route}`;
  }
  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  private setGlobalRequestContext() {
    return {
      context: new HttpContext().set(IS_GLOBAL_REQUEST, true)
    };
  }
}
