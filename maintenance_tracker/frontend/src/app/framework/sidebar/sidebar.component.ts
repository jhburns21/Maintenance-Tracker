import { Component, OnInit } from '@angular/core';
import { faHome  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;

  isOpen = false;
  sidebarItems = [];

  constructor() { }

  public ngOnInit(): void {
    this.sidebarItems = [
      {
        icon: faHome, text: 'Home', link: ''
      }
    ]
  }

  public onMouseOver(event): void {
    event.currentTarget.classList.remove('sidebar-collapse');
    event.currentTarget.classList.add('sidebar-open');
    this.isOpen = true;
  }

  public onMouseOut(event): void {
    event.currentTarget.classList.add('sidebar-collapse');
    event.currentTarget.classList.remove('sidebar-open');
    this.isOpen = false;
  }

}
