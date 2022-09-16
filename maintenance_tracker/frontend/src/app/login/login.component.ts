import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(builder: FormBuilder, public authService: AuthenticationService, public router: Router, public messageService: MessageService) {
    this.loginForm = builder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  public ngOnInit(): void {
    console.log(this.loginForm.get('username')?.errors);
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        data => {
          this.messageService.add({severity: 'success', summary: 'Success!', detail: data.message});
          this.router.navigate(['/']);
        }, error => {
          this.messageService.add({severity: 'error', summary: 'Error!', detail: error.error.message});
          console.log(error);
        }
      );
    } else {
      this.messageService.add({severity: 'error', summary: 'Error!', detail: 'Invalid Login Info.'});
    }
  }

}
