import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faEdit = faEdit;

  isOpen = false;
  sidebarItems = [];

  iconSize = '2x';

  constructor(public router: Router) { }

  public ngOnInit(): void {
    this.sidebarItems = [
      { icon: faHome, text: 'Home', link: '/' },
      { icon: faEdit, text: 'Record Maintenance', link: '/maintenance' },
    ];

    this.resizeIcons(window.innerWidth);
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

  public sidebarLinkClick(link: string): void {
    this.router.navigate([link]);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event): void {
    this.resizeIcons(event.target.innerWidth);
  }

  private resizeIcons(size: number): void {
    if (size < 1600) {
      this.iconSize = 'lg';
    } else if (size > 1600) {
      this.iconSize = '2x';
    }
  }
}
