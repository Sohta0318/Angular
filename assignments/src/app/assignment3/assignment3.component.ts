import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  password: string = 'Secret Password = tuna';
  isShow: boolean = false;
  count: number = 0;
  all: number[] = [];
  constructor() {}

  ngOnInit(): void {}
  onDisplay() {
    this.count++;
    this.all.push(this.count);
    this.isShow = !this.isShow;
  }
}
