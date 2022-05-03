import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id = 0;
  lang = ["Changer en Français", "Change to English"];
  constructor(private readonly translateService: TranslateService) {}
  ngOnInit(): void {
    this.translateService.use('en');
  }
  changeLanguage(){
    this.translateService.currentLang !== 'en' ? this.translateService.use('en') : this.translateService.use('fr');
    this.id !== 0 ? this.id = 0 : this.id = 1;
  }
}
