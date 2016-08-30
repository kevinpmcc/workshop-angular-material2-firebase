import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({

  moduleId: module.id,
  selector: 'theater',

  template: `
    <h2>Movie theater</h2>
    <h3>Listing the seats</h3>


    <div style="clear:both"></div>
    <div>
      <md-grid-list class="auditorium" cols="10" *ngFor="let item of list | async" (click)="book(item)">
        <md-grid-tile >{{ item.seat }}</md-grid-tile>
    </md-grid-list>
    </div>
  `,
  styleUrls: ['theater.component.css']
})


export class Theater{
    list;

    constructor(public af:AngularFire){
        this.initSeats();
    }

    private initSeats(){
        this.list = this.af.database.list('/seats');
        this.list.remove();
        for(var i=0; i< 100; i++) {
        this.list.push({ seat: i + 1, booked: false, reserved: false});
        }
    }



    book(seat) {
        var db = this.af.database.list('/seats')
        if(seat.booked) {
            seat.booked = true;
            seat.reserved;
        } else if(seat.reserved) {
            seat.booked = true;
            seat.reserved = false;
        } else if(seat.booked) {
            seat.booked = false;
        } else {
            seat.reserved = true;
        }
        db.update(seat.$key, { booked : seat.booked, reserved: seat.reserved });
    }
}
