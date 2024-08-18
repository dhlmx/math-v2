import { Component, OnInit } from '@angular/core';
import { expansion } from '../../../core/utilities/numeric';

@Component({
  selector: 'app-expansions',
  templateUrl: './expansions.component.html',
  styleUrls: ['./expansions.component.scss']
})
export class ExpansionsComponent implements OnInit {

  expansions = [
    { n: 13, base: 2, expOfn: expansion(13, 2) },
    { n: 602, base: 10, expOfn: expansion(602, 10) },
    { n: 602, base: 2, expOfn: expansion(602, 2) }
  ];

  ngOnInit(): void {
    // TODO
  }
}
