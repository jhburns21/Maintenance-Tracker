import { Component, OnInit } from '@angular/core';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerIcon = faScrewdriverWrench;
  user = 'John'

  constructor() { }

  ngOnInit(): void {
    // TODO: Deal with Logout Code
  }

}
