import { Injectable } from '@angular/core';

@Injectable()
export class GenericUtil {

  constructor(

  ) {

  }

  public static isSet(variable: any): boolean {
    return variable !== undefined && variable !== null;
  }

}
