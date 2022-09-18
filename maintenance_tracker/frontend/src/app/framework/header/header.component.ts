import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerIcon = faScrewdriverWrench;
  user = 'John'

  constructor(public authService: AuthenticationService, public router: Router, public messageService: MessageService) { }

  public ngOnInit(): void {
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
}
