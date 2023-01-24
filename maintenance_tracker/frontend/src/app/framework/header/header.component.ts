import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import {MenuItem, MessageService} from 'primeng/api';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerIcon = faScrewdriverWrench;
  public iconSize = '3x'
  public user = 'User!'
  public menuItems: MenuItem[] = [];

  constructor(public authService: AuthenticationService, public router: Router, public messageService: MessageService) { }

  private resizeIcons(size: number): void {
    if (size < 1600) {
      this.iconSize = 'lg';
    } else if (size > 1600) {
      this.iconSize = '3x';
    }
  }

  public ngOnInit(): void {

    this.resizeIcons(window.innerWidth);
  }

  public logout(): void {
    this.authService.logout().subscribe(
      () => {
        this.messageService.add({severity: 'success', summary: 'Success!', detail: 'Logged out'});
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Error!', detail: 'Unable to logout.'});
      }
    )
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event): void {
    this.resizeIcons(event.target.innerWidth);
  }
}
