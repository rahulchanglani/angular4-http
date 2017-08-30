import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('https://auth-test-32136.firebaseio.com/data.json', servers, 
    { headers: headers });
  }

  updateServers(servers: any[]) {
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('https://auth-test-32136.firebaseio.com/data.json', servers, 
    { headers: headers });
  }

  getServers() {
    return this.http.get('https://auth-test-32136.firebaseio.com/data.json')
    .map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong' + error);
      }
    );
  }

  getAppName() {
    return this.http.get('https://auth-test-32136.firebaseio.com/data.json')
    .map(
      (response: Response) => {
        return response.json();
      }
    )
  }

}
