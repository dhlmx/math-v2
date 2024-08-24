import { Component, OnInit } from '@angular/core';
import { KMeans } from '../../../core/models/kmeans';
import { PdfService } from '../../../core/services/pdf.service';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-k-means',
  templateUrl: './k-means.component.html',
  styleUrls: ['./k-means.component.scss']
})
export class KMeansComponent implements OnInit {

  data = [
    [1, 3], [5, 8], [3, 0]
  ];

  kmeans = new KMeans(2, this.data);

  constructor(public appService: AppService, private pdfService: PdfService) { }

  ngOnInit(): void {
    console.info('KMeans->Centroids', this.kmeans.centroids);
  }

  onClickPrint = (): void => {
    console.info('Printing...');

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
