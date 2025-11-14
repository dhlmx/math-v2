import { ICombination } from '../interfaces/icombination';
import { someHasSameElements, transformToMultipleArray } from '../utilities/array.service';
import { sortMultipleArrayOfWords } from '../utilities/sort.service';
import { factorial } from '../utilities/calculate';

export class Combination implements ICombination {
  items: any[] = [];
  positions = 0;
  selection = 0;
  ignoreElementPosition = false;
  allowItemsRepeatedByVariation = false;
  allowForRepeatedVariations = false;
  allowSwaps = false;

  private _combinations = 0;
  private _swaps = 0;
  private _variations = 0;
  private combinations: any[][] = [];
  private swaps: any[][] = [];
  private variations: any[][] = [];

  constructor(source?: ICombination) {
    if (source) {
      this.items = source.items;
      this.positions = source.positions;
      this.ignoreElementPosition = source.ignoreElementPosition;
      this.allowItemsRepeatedByVariation = source.allowItemsRepeatedByVariation;
      this.allowForRepeatedVariations = source.allowForRepeatedVariations;
      this.allowSwaps = source.allowSwaps;
    }
  }

  private calculate = (): void => {
    this._variations = Math.pow(this.items.length, this.positions);
    this._swaps = factorial(this.items.length) / (factorial(this.positions) * factorial(this.items.length - this.positions));
    this._combinations = this._swaps / this.selection;

  }

  private combine = (): void => {
    this.variations = [];
    this.swaps = [];
    this.combinations = [];

    let position = 1,
        combinations: any[][] = [],
        swaps: any[][] = [],
        variations: any[][] = [],
        innerCombinations: any[][] = [],
        innerSwaps: any[][] = [],
        innerVariations: any[][] = [];

    // Variations
    while (position <= this.positions) {
      if (position === 1) {
        this.items.forEach(item => {
          innerVariations.push([item]);
        });
      } else {
        innerVariations = [];

        variations.forEach(variation => {
          this.items.forEach(item => {
            let innerVariation = [...variation];
            innerVariation.push(item);
            innerVariations.push(innerVariation);
          });
        });
      }

      variations = [...innerVariations];
      position++;
    }

    this.variations = [...variations];

    // Combinations
    position = 1;

    while (position <= this.positions) {
      if (position === 1) {
        this.items.forEach(item => {
          innerCombinations.push([item]);
        });
      } else {
        innerCombinations = [];

        combinations.forEach(combination => {
          this.items.forEach(item => {
            let innerCombination = [...combination];
            if (!innerCombination.includes(item)) {
              innerCombination.push(item);
              innerCombinations.push(innerCombination);
            }
          });
        });
      }

      combinations = [...innerCombinations];
      position++;
    }

    this.combinations = [...combinations];

    // Swaps
    position = 1;

    while (position <= this.positions) {
      if (position === 1) {
        this.items.forEach(item => {
          innerSwaps.push([item]);
        });
      } else {
        innerSwaps = [];

        swaps.forEach(swap => {
          this.items.forEach(item => {
            let innerSwap = [...swap];
            if (!innerSwap.includes(item) && !someHasSameElements(innerSwaps, innerSwap.concat(item))) {
              innerSwap.push(item);
              innerSwaps.push(innerSwap);
            }
          });
        });
      }

      swaps = [...innerSwaps];
      position++;
    }

    this.swaps = [...swaps];

    /*
    this.items.forEach(itemX => {
      let variation = [itemX];
      this.items.forEach(itemY => {
        let innerVariation = [...variation];
        innerVariation.push(itemY);
        this.variations.push(innerVariation);
      });
    });
    */

    // Each variation includes an item already, then position = 1
    /*
    while (position < this.positions) {
      for (const item of this.items) {
        this.combinations.forEach(combination => {
          if (!combination.includes(item)) {
            combination.push(item);
          }
        });

        this.swaps.forEach(swap => {
          if (!swap.includes(item) && !someHasSameElements(this.swaps, swap.concat(item))) {
            swap.push(item);
          }
        });
      }

      position++;
    }
    */
 }

  init = (): void => {
    this.calculate();
    this.combine();
  }

  public list = (sort: boolean): any /*{ variations: any[][], combinatios: any[][], swaps: any[][] }*/ => {
    return {
      nVariations: this._variations,
      variations: sort ? sortMultipleArrayOfWords(this.variations, this.ignoreElementPosition) : this.variations,
      nCombinations: this._combinations,
      combinatios: sort ? sortMultipleArrayOfWords(this.combinations, this.ignoreElementPosition) : this.combinations,
      nSwaps: this._swaps,
      swaps: sort ? sortMultipleArrayOfWords(this.swaps, this.ignoreElementPosition) : this.swaps
    }
  }
}

  // let iterator = this.items.length;
  // this._total = 1;

  // while (iterator > (this.items.length - this.positions)) {
  //   this._total *= iterator;
  //   iterator--;
  // }
  // if (this.ignoreElementPosition) {
  //   if (!subSerie.includes(item)
  //     && !someHasSameElements(innerSeries, subSerie.concat(item))
  //   ) {
  //     innerSeries.push(subSerie.concat(item));
  //   }
  // } else if (!subSerie.includes(item)) {
  //     innerSeries.push(subSerie.concat(item));
  // }
