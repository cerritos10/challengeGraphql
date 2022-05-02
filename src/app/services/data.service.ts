import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  QUERYIN_PROGRESS = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:IN_PROGRESS
  }){
    assignee{
      id
    }
    name
    tags
    dueDate
    pointEstimate
    creator{
      avatar
    }
    status
    
  }
  }
`;

QUERYCancelled = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:CANCELLED
  }){
    assignee{
      id
    }
    name
    tags
    dueDate
    pointEstimate
    creator{
      avatar
    }
    status
    
  }
  }
`;

QUERYBACKLOG = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:BACKLOG
  }){
    assignee{
      id
    }
    name
    tags
    dueDate
    pointEstimate
    creator{
      avatar
    }
    status
    
  }
  }
`;



QUERYDONE = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:DONE
  }){
    assignee{
      id
    }
    name
    tags
    dueDate
    pointEstimate
    creator{
      avatar
    }
    status
    
  }
  }
`;


}


