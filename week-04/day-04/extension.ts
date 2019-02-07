'use strict';

export function add(a: number, b: number): number {
  return a+b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a>c) {
    return a;
  } else if (b>c) {
    return b;
  }
  else { return c};
};

export function median(pool: number[]): number {
  return (pool.sort((v1, v2) => v1-v2)[Math.floor((pool.length - 1) / 2)] + pool.sort((v1, v2) => v1-v2)[Math.ceil((pool.length - 1) / 2)])/2;
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i', 'á', 'é', 'ú', 'ü','ű', 'ó', 'ö', 'ő', 'í'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}