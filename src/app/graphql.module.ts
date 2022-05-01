import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache,ApolloLink } from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { HttpClientModule } from '@angular/common/http';


const uri = 'https://syn-api-prod.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNjQ3ODEyZjgyMzIwIiwicHJvamVjdElkIjoiMDU1MDAyYzUtMGM4ZC00OTIyLThmZTktNjhkMDFhNWVmNDZiIiwiZnVsbE5hbWUiOiJNaWx0b24gVXJpZWwgQ2Vycml0b3MgRXNwaW5vIiwiZW1haWwiOiJtdS4xMGNlcnJpdG9zQGdtYWlsLmNvbSIsImlhdCI6MTY1MTE4NDIwMH0.gF18e4Yw-PDkQvbQeSabLtA6wcFyaoyKqHn2Je2QfrE'

export function createApollo(httpLink: HttpLink) {

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));


  const auth = setContext((operation, context) => {
    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: cache,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
