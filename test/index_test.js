const test = require('assert');
const sut = require('../build/syriac-code-util');

describe('Util', () => {
  it('Is Consonant', () => {
    test.ok(sut.isConsonant('ܐ'), 'ܐ isConsonant');
    test.ok(sut.isConsonant('ܥ'), 'ܥ isConsonant');
    test.ok(sut.isConsonant('ܒ'), 'ܒ isConsonant');
    test.ok(sut.isConsonant('ܫ'), 'ܫ isConsonant');
    test.ok(sut.isConsonant('ܬ'), 'ܬ isConsonant');
    test.ok(sut.isConsonant('ܓ'), 'ܓ isConsonant');
    test.ok(sut.isConsonant('ܨ'), 'ܨ isConsonant');
    test.ok(sut.isConsonant('ܩ'), 'ܩ isConsonant');
    test.ok(!sut.isConsonant('b'), '! b isConsonant');
    test.ok(!sut.isConsonant('X'), '! X isConsonant');
  });
  it('Is Eastern Vowel', () => {
    test.ok(sut.isEasternVowel('ܲ'), ' ܲ isEasternVowel');
    test.ok(sut.isEasternVowel('ܵ'), 'ܵ isEasternVowel');
    test.ok(sut.isEasternVowel('ܸ'), 'ܸ isEasternVowel');
    test.ok(sut.isEasternVowel('ܹ'), 'ܹ isEasternVowel');
    test.ok(sut.isEasternVowel('ܼ'), 'ܼ isEasternVowel');
    test.ok(sut.isEasternVowel('ܿ'), 'ܿ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܳ'), 'ܳ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܴ'), 'ܴ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܷ'), 'ܷ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܰ'), ' ܰ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܺ'), 'ܺ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܻ'), 'ܻ isEasternVowel');
    test.ok(!sut.isEasternVowel('ܽ'), 'ܽ isEasternVowel');
    test.ok(!sut.isEasternVowel('U'), 'U isEasternVowel');
    test.ok(!sut.isEasternVowel(':'), ': isEasternVowel');
    test.ok(!sut.isEasternVowel(''), "! '' isEasternVowel");
  });
  it('Is Western Vowel', () => {
    test.ok(sut.isWesternVowel('ܳ'), 'ܳ isWesternVowel');
    test.ok(sut.isWesternVowel('ܴ'), 'ܴ isWesternVowel');
    test.ok(sut.isWesternVowel('ܷ'), 'ܷ isWesternVowel');
    test.ok(sut.isWesternVowel('ܰ'), ' ܰ isWesternVowel');
    test.ok(sut.isWesternVowel('ܺ'), 'ܺ isWesternVowel');
    test.ok(sut.isWesternVowel('ܻ'), 'ܻ isWesternVowel');
    test.ok(sut.isWesternVowel('ܽ'), 'ܽ isWesternVowel');
    test.ok(!sut.isWesternVowel('ܲ'), ' ܲ isWesternVowel');
    test.ok(!sut.isWesternVowel('ܵ'), 'ܵ isWesternVowel');
    test.ok(!sut.isWesternVowel('ܸ'), 'ܸ isWesternVowel');
    test.ok(!sut.isWesternVowel('ܹ'), 'ܹ isWesternVowel');
    test.ok(!sut.isWesternVowel('ܼ'), 'ܼ isWesternVowel');
    test.ok(!sut.isWesternVowel('ܿ'), 'ܿ isWesternVowel');
    test.ok(!sut.isWesternVowel('U'), 'U isWesternVowel');
    test.ok(!sut.isWesternVowel(':'), ': isWesternVowel');
    test.ok(!sut.isWesternVowel(''), "! '' isWesternVowel");
  });
  it('Is Vowel', () => {
    test.ok(sut.isVowel('ܲ'), ' ܲ isVowel');
    test.ok(sut.isVowel('ܰ'), ' ܰ isVowel');
    test.ok(sut.isVowel('ܵ'), 'ܵ isVowel');
    test.ok(sut.isVowel('ܳ'), 'ܳ isVowel');
    test.ok(sut.isVowel('ܴ'), 'ܴ isVowel');
    test.ok(sut.isVowel('ܷ'), 'ܷ isVowel');
    test.ok(sut.isVowel('ܸ'), 'ܸ isVowel');
    test.ok(sut.isVowel('ܹ'), 'ܹ isVowel');
    test.ok(sut.isVowel('ܺ'), 'ܺ isVowel');
    test.ok(sut.isVowel('ܻ'), 'ܻ isVowel');
    test.ok(sut.isVowel('ܼ'), 'ܼ isVowel');
    test.ok(sut.isVowel('ܽ'), 'ܽ isVowel');
    test.ok(sut.isVowel('ً'), '̄ ً isVowel');
    test.ok(!sut.isVowel('U'), 'U isVowel');
    test.ok(!sut.isVowel(':'), ': isVowel');
    test.ok(!sut.isVowel(''), "! '' isVowel");
  });
  it('Is Common Diacritic', () => {
    test.ok(sut.isCommonDiacritic('݁'), '݁ isCommonDiacritic');
    test.ok(sut.isCommonDiacritic('݂'), '݂ isCommonDiacritic');
    test.ok(sut.isCommonDiacritic('݇'), '݇ isCommonDiacritic');
    test.ok(sut.isCommonDiacritic('̈'), '̈  isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('݄'), '݄ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('݅'), '݅ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('݆'), '݆ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('݈'), '݈ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('݉'), '݉ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('݊'), '݊ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('̄'), '̄ isCommonDiacritic');

    test.ok(!sut.isCommonDiacritic("'"), "! ' isCommonDiacritic");
    test.ok(!sut.isCommonDiacritic(','), '! , isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('*'), '! * isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic('_'), '! _ isCommonDiacritic');
    test.ok(!sut.isCommonDiacritic(''), "! '' isCommonDiacritic");
    test.ok(!sut.isCommonDiacritic(' '), "! ' ' isCommonDiacritic");
  });
  it('Is Swadaya Diacritic', () => {
    test.ok(sut.isSwadayaDiacritic('̃'), '̃  isSwadayaDiacritic');
    test.ok(sut.isSwadayaDiacritic('̰'), '̰  isSwadayaDiacritic');
    test.ok(sut.isSwadayaDiacritic('̮'), '̮  isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('̈'), '̈  isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('݄'), '݄ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('݅'), '݅ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('݆'), '݆ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('݈'), '݈ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('݉'), '݉ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('݊'), '݊ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('̄'), '̄ isSwadayaDiacritic');

    test.ok(!sut.isSwadayaDiacritic("'"), "! ' isSwadayaDiacritic");
    test.ok(!sut.isSwadayaDiacritic(','), '! , isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('*'), '! * isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('_'), '! _ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic(''), "! '' isSwadayaDiacritic");
    test.ok(!sut.isSwadayaDiacritic(' '), "! ' ' isSwadayaDiacritic");
  });
  it('Is Other Diacritic', () => {
    test.ok(sut.isOtherDiacritic('݃'), '݃ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݄'), '݄ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݅'), '݅ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݆'), '݆ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݈'), '݈ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݉'), '݉ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݊'), '݊ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('̄'), '̄ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('݀'), '݀ isOtherDiacritic');
    test.ok(sut.isOtherDiacritic('ّ'), 'ّ isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('ً'), '̄ ً isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('݁'), '݁ isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('݂'), '݂ isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('݇'), '݇ isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('̈'), '̈  isOtherDiacritic');

    test.ok(!sut.isOtherDiacritic("'"), "! ' isOtherDiacritic");
    test.ok(!sut.isOtherDiacritic(','), '! , isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('*'), '! * isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic('_'), '! _ isOtherDiacritic');
    test.ok(!sut.isOtherDiacritic(''), "! '' isOtherDiacritic");
    test.ok(!sut.isOtherDiacritic(' '), "! ' ' isOtherDiacritic");
  });
  it('Is Diacritic', () => {
    test.ok(sut.isDiacritic('݀'), '݀ isDiacritic');
    test.ok(sut.isDiacritic('݁'), '݁ isDiacritic');
    test.ok(sut.isDiacritic('݂'), '݂ isDiacritic');
    test.ok(sut.isDiacritic('݃'), '݃ isDiacritic');
    test.ok(sut.isDiacritic('݄'), '݄ isDiacritic');
    test.ok(sut.isDiacritic('݅'), '݅ isDiacritic');
    test.ok(sut.isDiacritic('݆'), '݆ isDiacritic');
    test.ok(sut.isDiacritic('݇'), '݇ isDiacritic');
    test.ok(sut.isDiacritic('݈'), '݈ isDiacritic');
    test.ok(sut.isDiacritic('݉'), '݉ isDiacritic');
    test.ok(sut.isDiacritic('݊'), '݊ isDiacritic');
    test.ok(sut.isDiacritic('̈'), '̈ isDiacritic');
    test.ok(sut.isDiacritic('̄'), '̄ isDiacritic');

    test.ok(!sut.isDiacritic("'"), "! ' isDiacritic");
    test.ok(!sut.isDiacritic(','), '! , isDiacritic');
    test.ok(!sut.isDiacritic('*'), '! * isDiacritic');
    test.ok(!sut.isDiacritic('_'), '! _ isDiacritic');
    test.ok(!sut.isDiacritic(''), "! '' isDiacritic");
    test.ok(!sut.isDiacritic(' '), "! ' ' isDiacritic");
  });
  it('Is Punctuation', () => {
    test.ok(sut.isPunctuation('؟'), '؟ isPunctuation');
    test.ok(sut.isPunctuation('܀'), '܀ isPunctuation');
    test.ok(sut.isPunctuation('܆'), '܆ isPunctuation');
    test.ok(sut.isPunctuation('!'), '! isPunctuation');
    test.ok(sut.isPunctuation('؛'), "؛ '' isPunctuation");
    test.ok(!sut.isPunctuation(' '), "! ' ' isPunctuation");
    test.ok(!sut.isPunctuation('&'), '! & isPunctuation');
    test.ok(!sut.isPunctuation('.'), '! . isPunctuation');
    test.ok(!sut.isPunctuation('`'), '! ` isPunctuation');
    test.ok(!sut.isPunctuation('~'), '! ~ isPunctuation');
    test.ok(!sut.isPunctuation(','), '! , isPunctuation');
  });
  it('Is Swadaya Eastern Diacritic', () => {
    test.ok(sut.isSwadayaDiacritic('̃'), '̃  isSwadayaDiacritic');
    test.ok(sut.isSwadayaDiacritic('̰'), '̰  isSwadayaDiacritic');
    test.ok(sut.isSwadayaDiacritic('̮'), '̮  isSwadayaDiacritic');
    test.ok(sut.isSwadayaDiacritic('\u0303'), '̃  \u0303 isSwadayaDiacritic');
    test.ok(sut.isSwadayaDiacritic('\u0330'), '̰  \u0330 isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('?'), '? isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic(''), "! '' isSwadayaDiacritic");
    test.ok(!sut.isSwadayaDiacritic(' '), "! ' ' isSwadayaDiacritic");
    test.ok(!sut.isSwadayaDiacritic('&'), '! & isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('!'), '! ! isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('2'), '! ` isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic('~'), '! ~ isSwadayaDiacritic');
    test.ok(!sut.isSwadayaDiacritic(','), '! , isSwadayaDiacritic');
  });
  it('Is Other', () => {
    test.ok(sut.isOther('♱'), '♱ isOther');
    test.ok(sut.isOther('♰'), '♰ isOther');
    test.ok(sut.isOther('\u2671'), '♱ \u2671 isOther');
    test.ok(sut.isOther('\u2670'), '♰ \u2670 isOther');
    test.ok(!sut.isOther('.'), '. isOther');
    test.ok(!sut.isOther('?'), '? isOther');
    test.ok(!sut.isOther(''), "! '' isOther");
    test.ok(!sut.isOther(' '), "! ' ' isOther");
    test.ok(!sut.isOther('&'), '! & isOther');
    test.ok(!sut.isOther('!'), '! ! isOther');
    test.ok(!sut.isOther('`'), '! ` isOther');
    test.ok(!sut.isOther('~'), '! ~ isOther');
    test.ok(!sut.isOther(','), '! , isOther');
  });
  it('Is Dotting', () => {
    test.ok(sut.isDotting('ܲ'), ' ܲ isDotting');
    test.ok(sut.isDotting('ܰ'), ' ܰ isDotting');
    test.ok(sut.isDotting('ܵ'), 'ܵ isDotting');
    test.ok(sut.isDotting('ܳ'), 'ܳ isDotting');
    test.ok(sut.isDotting('ܴ'), 'ܴ isDotting');
    test.ok(sut.isDotting('ܷ'), 'ܷ isDotting');
    test.ok(sut.isDotting('ܸ'), 'ܸ isDotting');
    test.ok(sut.isDotting('ܹ'), 'ܹ isDotting');
    test.ok(sut.isDotting('ܺ'), 'ܺ isDotting');
    test.ok(sut.isDotting('ܻ'), 'ܻ isDotting');
    test.ok(sut.isDotting('ܼ'), 'ܼ isDotting');
    test.ok(sut.isDotting('ܽ'), 'ܽ isDotting');
    test.ok(sut.isDotting('݀'), '݀ isDotting');
    test.ok(sut.isDotting('݁'), '݁ isDotting');
    test.ok(sut.isDotting('݂'), '݂ isDotting');
    test.ok(sut.isDotting('݃'), '݃ isDotting');
    test.ok(sut.isDotting('݄'), '݄ isDotting');
    test.ok(sut.isDotting('݅'), '݅ isDotting');
    test.ok(sut.isDotting('݆'), '݆ isDotting');
    test.ok(sut.isDotting('݇'), '݇ isDotting');
    test.ok(sut.isDotting('݈'), '݈ isDotting');
    test.ok(sut.isDotting('݉'), '݉ isDotting');
    test.ok(sut.isDotting('݊'), '݊ isDotting');
    test.ok(sut.isDotting('̈'), '̈ isDotting');
    test.ok(sut.isDotting('̄'), '̄ isDotting');

    test.ok(!sut.isDotting("'"), "! ' isDotting");
    test.ok(!sut.isDotting(','), '! , isDotting');
    test.ok(!sut.isDotting('*'), '! * isDotting');
    test.ok(!sut.isDotting('_'), '! _ isDotting');
    test.ok(!sut.isDotting(''), "! '' isDotting");
    test.ok(!sut.isDotting(' '), "! ' ' isDotting");
  });
  it('Remove Dotting', () => {
    let word = 'ܐܣܛܪܢܓܠܐ';
    let expected = 'ܐܣܛܪܢܓܠܐ';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'ܐܣܛܪܢܓܠܐ removeDotting'
    );
    word = 'ܣܪܛܐ ܐܘܢܓܠܝܐ';
    expected = 'ܣܪܛܐ ܐܘܢܓܠܝܐ';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'ܣܪܛܐ ܐܘܢܓܠܝܐ removeDotting'
    );

    word = 'ܡܲܕ݂ܢܚܵܝܵܐ';
    expected = 'ܡܕܢܚܝܐ';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'ܡܲܕ݂ܢܚܵܝܵܐ removeDotting'
    );

    word = 'ܥܨܵܨܵܐ ܪܘܝܼܚܵܐ';
    expected = 'ܥܨܨܐ ܪܘܝܚܐ';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'ܥܨܵܨܵܐ ܪܘܝܼܚܵܐ removeDotting'
    );

    test.strictEqual(sut.removeDotting("'"), "'", "' removeDotting");
    test.strictEqual(sut.removeDotting(','), ',', ', removeDotting');
    test.strictEqual(sut.removeDotting('*'), '*', '* removeDotting');
    test.strictEqual(sut.removeDotting('_'), '_', '_ removeDotting');
    test.strictEqual(sut.removeDotting(''), '', "'' removeDotting");
    test.strictEqual(sut.removeDotting(' '), ' ', "' ' removeDotting");
  });
});
