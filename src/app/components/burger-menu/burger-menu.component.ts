import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent implements OnInit {
  menuOpen = false;
  isDesktop:boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    debugger
    this.isDesktop = this.breakpointObserver.isMatched(Breakpoints.Web);
  }
}
