import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { AppService } from '../../../core/services/app.service';
import { complement, intersection, parseSet, union } from '../../../core/utilities/numeric';
import { PdfService } from '../../../core/services/pdf.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  universe: any[] = [];
  setA: any[] = [];
  setB: any[] = [];

  aub: any[] = [];
  anb: any[] = [];
  ac: any[] = [];
  bc: any[] = [];

  controls = {
    universe: new FormControl('', [Validators.required]),
    setA: new FormControl('', [Validators.required]),
    setB: new FormControl('', [Validators.required])
  };

  form = new FormGroup({ ...this.controls });

  constructor(public appService: AppService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.appService.process.start('Loading...');

    setTimeout(() => {
      this.appService.process.stop();
    }, 1000);
  }

  onClickCalculate = (): void => {
    this.appService.process.start('Calculating...');

    setTimeout(() => {
      const universe = `${this.controls.universe.value}`,
          setA = `${this.controls.setA.value}`,
          setB = `${this.controls.setB.value}`;

      this.universe = parseSet(universe.split(','));
      this.setA = parseSet(setA.split(','));
      this.setB = parseSet(setB.split(','));

      this.aub = union(this.setA, this.setB);
      this.anb = intersection(this.setA, this.setB);
      this.ac = complement(this.universe, this.setA);
      this.bc = complement(this.universe, this.setB);

      this.appService.process.stop();
    }, 1000);
  }

  onClickPrint = (): void => {
    this.appService.process.start('Printing...');

    this.pdfService.exportPDF('htmlContent', 'resultados').subscribe({
      next: (status) => {
        console.info('exportPDF', status);
      },
      error: (e) => {
        console.info('exportPDF:ERROR', e);
      },
      complete: () => {
        this.appService.process.stop();
      }
    });
  }

}
