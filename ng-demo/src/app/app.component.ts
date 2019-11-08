import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();
  users: any[];

  constructor(private service: DataService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getUsers()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((res: any) => {
        this.users = res.data;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
