import { Component, OnInit } from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng52';

  constructor(private _upgrade: UpgradeModule) {

  }
  ngOnInit(): void {
    this._upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
    
  }
}
