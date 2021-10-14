import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
})
export class DigitalClockComponent implements OnInit {
  private daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  private date = new Date();

  public hour: any;
  public min: string = '';
  public sec: string = '';
  public day: string = '';
  public ampm: string = '';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);

    this.day = this.daysArray[this.date.getDay()];
  }

  private updateDate(date: Date) {
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    const minutes = date.getMinutes();
    this.min = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds();
    this.sec = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
