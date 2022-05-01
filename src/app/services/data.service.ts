import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {take, tap} from 'rxjs/operators'

const QUERY = gql`
    query{
      users{
        email
      }  
    }
`;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apollo: Apollo) { }

   getPruebas(): void {
    this.apollo.watchQuery<any>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(res => {
        console.log(res)
      })
    ).subscribe();
  }
}


