import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STRINGS } from 'src/app/constants';

@Component({
  selector: 'app-main.layout',
  templateUrl: './main.layout.component.html',
  styleUrls: ['./main.layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(private router: Router) {
    this.router.navigate([STRINGS.SCREEN.HOME]);
  }

  ngOnInit(): void {}
}

