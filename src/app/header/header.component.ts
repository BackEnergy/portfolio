import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang = "Changer en Français";
  constructor(private readonly translateService: TranslateService) {}
  ngOnInit(): void {
    this.translateService.use('en');
  }
  changeLanguage(){
    this.translateService.currentLang !== 'en' ? this.translateService.use('en') : this.translateService.use('fr');
    this.translateService.currentLang !== 'en' ? this.lang = "changer en Français" : this.lang = "Change to English";
  }
}
