import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  storeServers(servers: any[]) {
    return this.http.post('https://auth-test-32136.firebaseio.com/data.json', servers);
  }


}
