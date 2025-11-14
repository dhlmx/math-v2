import { IVariation } from '../interfaces/ivariation';
import { someHasSameElements } from '../utilities/array.service';

export class Variation implements IVariation {
  items: any[] = [];
  positions = 0;

  list: any[][] = [];
  total = 0;

  constructor(variation?: IVariation) {
    if (variation) {
      this.items = variation.items;
      this.positions = variation.positions;
    } else {
      this.items = [];
      this.positions = 0;
    }
  }

  init = (allowRepetitions: boolean, keepItemPosition: boolean): { total: number, list: any[][] } => {
    this.calculate(allowRepetitions, keepItemPosition);
    this.combine(allowRepetitions, keepItemPosition);

    return {
      total: this.total,
      list: this.list
    };
  }

  private calculate = (allowRepetitions: boolean, keepItemPosition: boolean): void => {
    this.total = Math.pow(this.items.length, this.positions);
  }

  private combine = (allowRepetitions: boolean, keepItemPosition: boolean): void => {
    let position = 1,
        variations: any[][] = [],
        innerVariations: any[][] = [];

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

            if (allowRepetitions) {
              innerVariation.push(item);
              innerVariations.push(innerVariation);
            } else {
              if (!innerVariation.includes(item)) {
                if (keepItemPosition) {
                  innerVariation.push(item);
                  innerVariations.push(innerVariation);
                } else {
                  if (!someHasSameElements(innerVariations, innerVariation.concat(item))) {
                    innerVariation.push(item);
                    innerVariations.push(innerVariation);
                  }
                }
              }
            }
          });
        });
      }

      variations = [...innerVariations];
      position++;
    }

    this.list = [...variations];
  }

  /*
  init = (): void => {
    this.combine();
  }

  series: string[][] = [];

  private total = 0;
  private variations: string[][] = [];

  constructor(series?: string[][]) {
    if (series) {
      this.series = series;
    }

    this.total = 0;
    this.variations = [];
  }

  calculate = (): number => {
    return this.total;
  }

  private calculation = (): void => {
    this.total = 1;

    this.series.forEach(serie => {
      this.total = this.total * serie.length;
    });
  }

  private combine = (): void => {
    let tmpSeries: string[][] = [];

    for (const serie of this.series) {
      if (tmpSeries.length === 0) {
        tmpSeries = transformToMultipleArray(serie);
      } else {
        const innerSeries: string[][] = [];

        tmpSeries.forEach(subSerie => {
          for (const element of serie) {
            innerSeries.push(subSerie.concat(element));
          }
        });

        tmpSeries = innerSeries;
      }
    }

    this.variations = tmpSeries;
  }

  init = (): void => {
    this.calculation();
    this.combine();
  }

  list = (sort: boolean): string[][] => {
    return sort ? sortMultipleArrayOfWords(this.variations, false) : this.variations;
  }
  */
}
