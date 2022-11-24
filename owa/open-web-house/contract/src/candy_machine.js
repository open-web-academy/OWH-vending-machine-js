// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, LookupSet, UnorderedMap } from 'near-sdk-js';
import {assert} from './utils';
import {Item} from './models.js'

@NearBindgen({})
export class CandyMachine {
  constructor() {
    this.items = new UnorderedMap("a");
    this.compradores = new UnorderedMap("b");
  }


  @call({}) // This method changes the state, for which it cost gas
  rellenarDulces({ dulce, cantidad, precio }) {
    near.log(`Rellenando dulce: ${dulce}, cantidad: ${cantidad}, precio: ${precio},`);

    let empleado = near.predecessorAccountId()

    let item = new Item (dulce, cantidad, precio)

    this.items.set(empleado, item)

    return this.items.toArray()   
  }

  // @call({payableFunction: true})
  // comprarDulce(){

  // }

  @view({}) // This method is read-only and can be called for free
  obtenerDulces(){
    return this.items.get(Item);
  }

}