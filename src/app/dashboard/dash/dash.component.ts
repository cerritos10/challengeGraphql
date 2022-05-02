import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { take, tap } from 'rxjs/operators'


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  tareasProgress;
  tareasBACKLOG;
  tareasCANCELLED;
  tareasDONE;

  constructor(private dataService: DataService, private apollo: Apollo) { }

  ngOnInit(): void {
    this.getTareasProgress();
    this.getTareasBacklog();
    this.getTareasCancelled();
    this.getTareasDone();
  }

  getTareasProgress(): void {
    this.apollo.watchQuery<any>({
      query: this.dataService.QUERYIN_PROGRESS
    }).valueChanges.pipe(
      take(1),
      tap(data => {
        this.tareasProgress = data.data['tasks']
        console.log(data)
      })
    ).subscribe();
  }

  getTareasBacklog(): void {
    this.apollo.watchQuery<any>({
      query: this.dataService.QUERYBACKLOG
    }).valueChanges.pipe(
      take(1),
      tap(data => {
        this.tareasBACKLOG = data.data['tasks']
        console.log(data)
      })
    ).subscribe();
  }

  getTareasCancelled(): void {
    this.apollo.watchQuery<any>({
      query: this.dataService.QUERYCancelled
    }).valueChanges.pipe(
      take(1),
      tap(data => {
        this.tareasCANCELLED = data.data['tasks']
        console.log(data)
      })
    ).subscribe();
  }

  getTareasDone(): void {
    this.apollo.watchQuery<any>({
      query: this.dataService.QUERYDONE
    }).valueChanges.pipe(
      take(1),
      tap(data => {
        this.tareasDONE = data.data['tasks']
        console.log(data)
      })
    ).subscribe();
  }


}
