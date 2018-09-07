import {Injectable} from '@angular/core';
import {environment} from './environments/environment';

@Injectable()
export class Configuration {
  public server = environment.server;
  public apiUrl = environment.apiUrl;
  public ServerWithApiUrl = this.server + this.apiUrl;
}
