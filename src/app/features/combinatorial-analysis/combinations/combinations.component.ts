import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';

// Services && Pipes
import { AppService } from '../../../core/services/app.service';
import { PdfService } from '../../../core/services/pdf.service';

// Interfaces && Models
import { ISelect } from '../../../core/interfaces/iselect';
import { Combination } from '../../../core/models/combination';
import { CombinationByGroup } from '../../../core/models/combination-by-group';
import { CombinationsGroup } from '../../../core/models/combinations-group';
import { CombinationsGroups } from '../../../core/models/combinations-groups';
import { Permutation } from '../../../core/models/permutation';
import { Variation } from '../../../core/models/variation';

// Enums && Constants
import { PROBLEMS } from '../../../core/constants/constants';

@Component({
  selector: 'app-combinations',
  templateUrl: './combinations.component.html',
  styleUrls: ['./combinations.component.scss']
})
export class CombinationsComponent implements OnInit {

  private jsonPipe = new JsonPipe();

  problems: ISelect[] = PROBLEMS;
  problem: ISelect = {} as ISelect;

  controls = {
    problem: new FormControl('', Validators.required)
  };

  form = new FormGroup({ ...this.controls });

  variation = new Variation();
  combination = new Combination();
  permutation = new Permutation();
  combinationByGroup = new CombinationByGroup();
  combinationGroups = new CombinationsGroups();

  // Algebra Superior
  variationOfTwoOfFourChars = new Combination();
  combinationOfTwoOfFourChars = new Combination();
  variationOfThreeOfFourChars = new Combination();

  combinationOfTwoOfTenVapors = new Combination();
  combinationOfThreeOfFourHotels = new Combination();
  combinationOfFourFromSixChairs = new Combination();
  combinationOfSixFromNineDigits = new Combination();

  groupsOfOneAndFourFromTwelveBooks = new CombinationByGroup();
  groupsOfFiveFromElevenBooks = new CombinationByGroup();

  combinationOfElevenFromFourteenMens = new Combination();

  groupsOfFiveFromFiveteenMens = new CombinationByGroup();

  combinationOfBritishesAndAmericans = new CombinationsGroup();
  combinationOfBritishesAndAmericansII = new CombinationsGroups();

  jsonData = '';
  blobData: Blob = new Blob();
  fileURL: any;

  constructor(
    public appService: AppService,
    public pdfService: PdfService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.appService.process.start('Loading...');

    setTimeout(() => {
      this.appService.process.stop();
    }, 1000);
  }

  createJsonData = (total: number, list: string[][]): void => {
    this.jsonData = this.jsonPipe.transform({
      total,
      list
    });

    this.blobData = new Blob([this.jsonData], { type: 'application/json' });
    this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.blobData));
  }

  onChangeProblem = (): void => {
    this.appService.process.start('Calculating...');

    setTimeout(() => {
      this.problem = this.controls.problem.value
        ? this.problems.find(p => p.value === this.controls.problem.value) ?? {} as ISelect
        : {} as ISelect;

      this.reset();
      this.resolve();
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

  private reset = (): void => {
    this.variation = new Variation();
    this.combination = new Combination();
    this.permutation = new Permutation();
    this.combinationByGroup = new CombinationByGroup();
    this.combinationGroups = new CombinationsGroups();
    this.resetJsonData();
  }

  resolveAS01 = (): void => {
    // this.wordsOfThreeFromFourChars = new Variation([
    //   ['a', 'b'], ['a', 'b'], ['a', 'b']
    // ]);
  }

  resolveAS02 = (): void => {
    // this.wordsOfThreeFromFourChars = new Variation([
    //   ['a', 'b'], ['a', 'b'], ['a', 'b']
    // ]);
  }

  resolveAS03 = (): void => {
    // this.wordsOfThreeFromFourChars = new Variation([
    //   ['a', 'b'], ['a', 'b'], ['a', 'b']
    // ]);
  }
  resolveAS04 = (): void => {
    // this.wordsOfThreeFromFourChars = new Variation([
    //   ['a', 'b'], ['a', 'b'], ['a', 'b']
    // ]);
  }

  resolveAS05 = (): void => {
    // this.wordsOfThreeFromFourChars = new Variation([
    //   ['a', 'b'], ['a', 'b'], ['a', 'b']
    // ]);
  }

  resolve = (): void => {
    switch (this.problem.value) {
      case 'MN-01':
        this.variation = new Variation([
          ['a', 'b'], ['a', 'b'], ['a', 'b']
        ]);

        this.variation.init();
        this.createJsonData(this.variation.calculate(), this.variation.list(false));
        break;
      case 'MN-02':
        this.variation = new Variation([
          ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        ]);

        this.variation.init();
        this.createJsonData(this.variation.calculate(), this.variation.list(false));
        break;
      case 'MN-03':
        this.variation = new Variation([
          ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        ]);

        this.variation.init();
        this.createJsonData(this.variation.calculate(), this.variation.list(false));
        break;
      case 'MN-05':
        this.combination = new Combination({
          elements: ['A', 'B', 'C', 'D'],
          length: 2,
          excludeArrangements: false
        });

        this.combination.init();
        this.createJsonData(this.combination.calculate(), this.combination.list(false));
        break;
      case 'MN-06':
        this.combination = new Combination({
          elements: ['S1', 'S2', 'S3', 'S4', 'S5'],
          length: 5,
          excludeArrangements: false
        });

        this.combination.init();
        this.createJsonData(this.combination.calculate(), this.combination.list(false));
        break;
      case 'MN-07':
        this.combination = new Combination({
          elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
          length: 3,
          excludeArrangements: false
        });

        this.combination.init();
        this.createJsonData(this.combination.calculate(), this.combination.list(false));
        break;
      case 'MN-08':
        this.combination = new Combination({
          elements: ['A', 'B', 'C', 'D'],
          length: 2,
          excludeArrangements: true
        });

        this.combination.init();
        this.createJsonData(this.combination.calculate(), this.combination.list(false));
        break;
      case 'MN-09':
        this.permutation = new Permutation([1, 2, 3, 4]);

        this.permutation.init();
        this.createJsonData(this.permutation.calculate(), this.permutation.list());
        break;
      case 'MN-10':
        this.combination = new Combination({
          elements: ['A', 'B', 'C', 'D', 'E'],
          length: 3,
          excludeArrangements: true
        });

        this.combination.init();
        this.createJsonData(this.combination.calculate(), this.combination.list(false));
        break;
      default:
        break;
    }
  }

  resolveMN10 = (): void => {
    // this.wordsOfThreeFromFourChars = new Variation([
    //   ['a', 'b'], ['a', 'b'], ['a', 'b']
    // ]);

    //   // Matemáticas naturales



    //   this.combinationOfFiveChairs = new Combination(
    //     { elements: ['S1', 'S2', 'S3', 'S4', 'S5'], length: 5, excludeArrangements: false }
    //   );

    //   this.combinationsOfThreeDigits = new Combination(
    //     { elements: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], length: 3, excludeArrangements: false }
    //   );

    //   this.selectionOfTwoFromFourPersons = new Combination(
    //     { elements: ['A', 'B', 'C', 'D'], length: 2, excludeArrangements: true }
    //   );

    //   this.permutationsOfFourDigits = new Combination(
    //     { elements: ['1', '2', '3', '4'], length: 4, excludeArrangements: false }
    //   );

      // Algebra Superior
      this.variationOfTwoOfFourChars = new Combination(
        { elements: ['a', 'b', 'c', 'd'], length: 2, excludeArrangements: false }
      );

      this.combinationOfTwoOfFourChars = new Combination(
        { elements: ['a', 'b', 'c', 'd'], length: 2, excludeArrangements: true }
      );

      this.variationOfThreeOfFourChars = new Combination(
        { elements: ['a', 'b', 'c', 'd'], length: 3, excludeArrangements: false }
      );

      this.combinationOfTwoOfTenVapors = new Combination(
        { elements: ['V01', 'V02', 'V03', 'V04', 'V05', 'V06', 'V07', 'V08', 'V09', 'V10'], length: 2, excludeArrangements: false }
      );

      this.combinationOfThreeOfFourHotels = new Combination(
        { elements: ['H01', 'H02', 'H03', 'H04'], length: 4, excludeArrangements: true }
      );

      this.combinationOfFourFromSixChairs = new Combination(
        { elements: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'], length: 4, excludeArrangements: false }
      );

      this.combinationOfSixFromNineDigits = new Combination(
        { elements: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], length: 6, excludeArrangements: false }
      );

      this.groupsOfOneAndFourFromTwelveBooks = new CombinationByGroup({
        elements: ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11', 'B12'],
        groups: [1, 4],
        excludeArrangements: true
      });

      this.groupsOfFiveFromElevenBooks = new CombinationByGroup({
        elements: ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11'],
        groups: [5],
        excludeArrangements: true
      });

      this.combinationOfElevenFromFourteenMens = new Combination({
        elements: ['H01', 'H02', 'H03', 'H04', 'H05', 'H06', 'H07', 'H08', 'H09', 'H10', 'H11', 'H12', 'H13', 'H14'],
        length: 3,
        excludeArrangements: true
      });

      this.groupsOfFiveFromFiveteenMens = new CombinationByGroup({
        elements: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15'],
        groups: [5, 5, 5],
        excludeArrangements: true
      });

      this.combinationOfBritishesAndAmericans = new CombinationsGroup([
        { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 4, excludeArrangements: true },
        { elements: ['US1', 'US2', 'US3', 'US4'], length: 2, excludeArrangements: true }
      ]);

      this.combinationOfBritishesAndAmericansII = new CombinationsGroups([
        [
          { elements: ['US1', 'US2', 'US3', 'US4'], length: 2, excludeArrangements: true },
          { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 4, excludeArrangements: true }
        ],
        [
          { elements: ['US1', 'US2', 'US3', 'US4'], length: 3, excludeArrangements: true },
          { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 3, excludeArrangements: true }
        ],
        [
          { elements: ['US1', 'US2', 'US3', 'US4'], length: 4, excludeArrangements: true },
          { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 2, excludeArrangements: true }
        ]
      ]);


  }

  resetJsonData = (): void => {
    this.jsonData = this.jsonPipe.transform({
      total: 0,
      list: []
    });

    this.blobData = new Blob();
    this.fileURL =  this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.blobData));
  }

  round = (value: number): number => {
    return Math.ceil(value);
  }
}

/*

  permutationOfTwoOfFourChars = new Permutation(['A', 'B', 'C', 'D'], 2, true);

  permutationOfTwoOfOctalDigits = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 2, true);

  permutationOfSixOfOctalDigits = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 6, true);

  permutationOfSixOfSixChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F'], 6, true);

  permutationOfOneOfSevenChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G'], 1, true);

  permutationOfThreeOfFiveChars = new Permutation(['A', 'B', 'C', 'D', 'E'], 3, true);

  permutationOfThreeOfTwelveChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], 3, true);

  permutationOfThreeOfNineChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 3, true);

  permutationOfThreeOfSixChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F'], 3, true);

  permutationOfThreeOfThreeChars = new Permutation(['A', 'B', 'C'], 3, true);

  permutationOfFourOfTwelveChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], 4, false);

  permutationOfOneAndFours = new Permutation(['11', '12', '13', '41', '42'], 3, true);

  permutationsOfTwelveChars = new PermutationsGroup(
    [3, 3, 3, 3],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    true
  );

  */

