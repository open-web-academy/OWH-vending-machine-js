// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view } from 'near-sdk-js';
import {assert} from './utils';

@NearBindgen({})
export class HelloNear {
  constructor() {
    this.message = "Hello";
  }
  

  @view({}) // This method is read-only and can be called for free
  get_greeting(){
    return this.message;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ message }) {
    near.log(`Saving greeting ${message}`);
    this.message = message;
  }
}