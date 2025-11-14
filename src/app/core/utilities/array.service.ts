export const hasSameElements = (serie: any[], elements: any[]): boolean => {
  let sameElements = serie.length === elements.length;

  if (sameElements) {
    elements.forEach(element => {
      if (!serie.includes(element)) {
        sameElements = false;
      }
    });
  }

  return sameElements;
},

someHasSameElements = (series: any[][], elements: any[]): boolean => {
  return series.some(serie => hasSameElements(serie, elements));
},

transformToMultipleArray = (elements: any[]): any[][] => {
  return elements.map(element => [element]);
};
