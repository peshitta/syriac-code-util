/** @module syriacCodeUtil */
/**
 * Syriac base 22 consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  '\u0710', // ܐ Syriac Letter Alaph
  '\u0712', // ܒ Syriac Letter Beth
  '\u0713', // ܓ Syriac Letter Gamal
  '\u0715', // ܕ Syriac Letter Dalath
  '\u0717', // ܗ Syriac Letter He
  '\u0718', // ܘ Syriac Letter Waw
  '\u0719', // ܙ Syriac Letter Zain
  '\u071A', // ܚ Syriac Letter Heth
  '\u071B', // ܛ Syriac Letter Teth
  '\u071D', // ܝ Syriac Letter Yudh
  '\u071F', // ܟ Syriac Letter Kaph
  '\u0720', // ܠ Syriac Letter Lamadh
  '\u0721', // ܡ Syriac Letter Mim
  '\u0722', // ܢ Syriac Letter Nun
  '\u0723', // ܣ Syriac Letter Semkath
  '\u0725', // ܥ Syriac Letter E
  '\u0726', // ܦ Syriac Letter Pe
  '\u0728', // ܨ Syriac Letter Sadhe
  '\u0729', // ܩ Syriac Letter Qaph
  '\u072A', // ܪ Syriac Letter Rish
  '\u072B', // ܫ Syriac Letter Shin
  '\u072C' // ܬ Syriac Letter Taw
]);

/**
 * Syriac extra consonants: Garshuni, ancient, Persian, Sogdian, Palestinian, etc.
 * @constant
 * @type { string[] }
*/
export const extraConsonants = Object.freeze([
  '\u0711', //  ܑ Syriac Letter Superscript Alaph - used in East Syriac texts to indicate an etymological Alaph
  '\u0714', // ܔ Syriac Letter Gamal Garshuni - Garshuni ج (jim); used in Garshuni documents
  '\u0716', // ܖ Syriac Letter Dotless Dalath Rish - ܕ or ܪ without a dot, used in old Syriac texts; ambiguous form for undifferentiated early dalath/rish
  '\u071C', // ܜ Syriac Letter Teth Garshuni - Garshuni ظ (tha); used in Garshuni documents
  '\u071E', // ܞ Syriac Letter Yudh He - The characters for Yah; mostly used in East Syriac texts
  '\u0724', // ܤ Syriac Letter Final Semkath - A variant form of ܣ with a tail
  '\u0727', // ܧ Syriac Letter Reversed Pe - Christian Palestinian Aramaic Pe; used in Christian Palestinian Aramaic
  '\u072D', // ܭ Syriac Letter Persian Bheth
  '\u072E', // ܮ Syriac Letter Persian Ghamal
  '\u072F', // ܯ Syriac Letter Persian Dhalath
  '\u074D', // ݍ Syriac Letter Sogdian Zhain
  '\u074E', // ݎ Syriac Letter Sogdian Khaph
  '\u074F', // ݏ Syriac Letter Sogdian Fe
  '\u0621', // ء Arabic Letter Hamza  - Garshuni hamzah
  '\u0860', //  Syriac Letter Malayalam Nga → \u0D19 ങ malayalam letter nga
  '\u0861', //  Syriac Letter Malayalam Ja → \u0D1C ജ malayalam letter ja
  '\u0862', //  Syriac Letter Malayalam Nya → \u0D1E ഞ malayalam letter nya
  '\u0863', //  Syriac Letter Malayalam Tta → \u0D1F ട malayalam letter tta
  '\u0864', //  Syriac Letter Malayalam Nna → \u0D23 ണ malayalam letter nna
  '\u0865', //  Syriac Letter Malayalam Nnna → \u0D29 ഩ malayalam letter nnna
  '\u0866', //  Syriac Letter Malayalam Bha → \u0D2D ഭ malayalam letter bha
  '\u0867', //  Syriac Letter Malayalam Ra → \u0D30 ര malayalam letter ra
  '\u0868', //  Syriac Letter Malayalam Lla → \u0D33 ള malayalam letter lla
  '\u0869', //  Syriac Letter Malayalam Llla → \u0D34 ഴ malayalam letter llla
  '\u086A' //  Syriac Letter Malayalam Ssa → \u0D37 ഷ malayalam letter ssa
]);

/**
 * All Syriac consonants including Garshuni, Persian, Sogdian and Palestinian, etc.
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(consonants.concat(extraConsonants));

/**
 * Syriac punctuation
 * @constant
 * @type { string[] }
*/
export const punctuation = Object.freeze([
  '\u0700', // ܀ Syriac End of Paragraph - marks the end of a paragraph
  '\u0701', // ܁ Syriac Supralinear Full Stop - marks interrogations, imperatives, and pauses, especially in Biblical texts
  '\u0702', // ܂ Syriac Sublinear Full Stop - marks subordinate clauses and minor pauses, especially in Biblical texts
  '\u0703', // ܃ Syriac Supralinear Colon - marks expressions of wonder and has a distinct pausal value in Biblical texts
  '\u0704', // ܄ Syriac Sublinear Colon - used at the end of verses of supplications
  '\u0705', // ܅ Syriac Horizontal Colon - joins two words closely together in a context to which a rising tone is suitable
  '\u0706', // ܆ Syriac Colon Skewed Left - marks a dependent clause
  '\u0707', // ܇ Syriac Colon Skewed Right - marks the end of a subdivision of the apodosis, or latter part of a Biblical verse
  '\u0708', // ܈ Syriac Supralinear Colon Skewed Left - marks a minor phrase division
  '\u0709', // ܉ Syriac Sublinear Colon Skewed Left - marks the end of a real or rhetorical question
  '\u070A', // ܊ Syriac Contraction - a contraction mark, mostly used in East Syriac; placed at the end of an incomplete word
  '\u070B', // ܋ Syriac Harklean Obelus - marks the beginning of a phrase, word, or morpheme that has a marginal note - similar to UTF ÷ division sign
  '\u070C', // ܌ Syriac Harklean Metobelus - marks the end of a section with a marginal note
  '\u070D', // ܍ Syriac Harklean Asteriscus - marks the beginning of a phrase, word, or morpheme that has a marginal note
  '\u070F', // ܏ܫܘ Syriac Abbreviation Mark - marks the beginning of a Syriac abbreviation

  '\u060C', // ، Arabic COMMA - also used with Thaana and Syriac in modern text
  '\u061B', // ؛ Arabic Semicolon - also used with Thaana and Syriac in modern text
  '\u061F', // ؟ Arabic Question Mark - also used with Thaana and Syriac in modern text
  '\u0021' // ! Exclamation Mark - regular ASCII exclamation mark
]);

/**
 * Eastern common vowels - common to Western Syriac as well
 * @constant
 * @type { string[] }
*/
export const easternCommonVowels = Object.freeze([
  '\u0732', //  ܲ Syriac Pthaha Dotted
  '\u0735', //  ܵ Syriac Zqapha Dotted
  '\u0739', //  ܹ Syriac Dotted Zlama Angular
  '\u073C' //  ܼ Syriac Hbasa-Esasa Dotted
]);

/**
 * Eastern only vowels
 * @constant
 * @type { string[] }
*/
export const easternOnlyVowels = Object.freeze([
  '\u0738', //  ܸ Syriac Dotted Zlama Horizontal
  '\u073F' //  ܿ Syriac Rwaha
]);

/**
 * Eastern vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze(
  easternCommonVowels.concat(easternOnlyVowels)
);

/**
 * Western vowels
 * @constant
 * @type { string[] }
*/
export const westernVowels = Object.freeze([
  '\u0730', //  ܰ Syriac Pthaha Above
  '\u0733', //  ܳ Syriac Zqapha Above
  '\u0736', //  ܶ Syriac Rbasa Above
  '\u073A', //  ܺ Syriac Hbasa Above
  '\u073D' //  ܽ Syriac Esasa Above
]);

/**
 * Western vowels below line
 * @constant
 * @type { string[] }
*/
export const westernVowelsBellow = Object.freeze([
  '\u0731', //  ܱ Syriac Pthaha Below
  '\u0734', //  ܴ Syriac Zqapha Below
  '\u0737', //  ܷ Syriac Rbasa Below
  '\u073B', //  ܻ Syriac Hbasa Below
  '\u073E' //  ܾ Syriac Esasa Below
]);

/**
 * All Western vowels
 * @constant
 * @type { string[] }
 */
export const allWesternVowels = westernVowels.concat(westernVowelsBellow);

/**
 * Eastern and Western vowels
 * @constant
 * @type { string[] }
 */
export const allVowels = easternVowels.concat(allWesternVowels);

/**
 * Diacritics common to both Eastern and Western
 * Qushaya, Rukkakha, Line under, Seyame
 * @constant
 * @type { string[] }
*/
export const commonDiacritics = Object.freeze([
  '\u0741', //  ݁ Syriac Qushshaya • indicates a plosive pronunciation
  '\u0742', //  ݂ Syriac Rukkakha • indicates an aspirated (spirantized) pronunciation
  '\u0747', //  ݇ Syriac Oblique Line Above • indication of a silent letter
  '\u0308' // ̈  Seyame, Rebwe: combining diaeresis
]);

/**
 * Swadaya Eastern diacritics
 * @constant
 * @type { string[] }
*/
export const swadayaDiacritics = Object.freeze([
  '\u0303', // ̃  Swadaya combining tilde
  '\u0330', // ̰  Swadaya combining tilde below
  '\u032E' // ̮  Swadaya combining breve below
]);

/**
 * Other diacritics: Qushaya, Rukkakha, Line variations, etc.
 * @constant
 * @type { string[] }
*/
export const otherDiacritics = Object.freeze([
  '\u030A', // ̊  Western Syriac Qushshaya variation: combining ring above
  '\u0325', // ̥  Western Syriac Rukkakha variation: combining ring below
  '\u0304', // ̄  Horizontal Line Above: combining macron
  '\u0331', // ̱  Horizontal Line Below: combining macron below
  '\u0748', //  ݈ Syriac Oblique Line Below • indication of a silent letter • also used to indicate numbers multiplied by a certain constant
  '\u0324', // ̤  Seyame Below: combining diaeresis below
  '\u0740', //  ݀ Syriac Feminine Dot • feminine marker used with the Taw feminine suffix
  '\u0307', // ̇  Combining dot above: Use ܒ̇ on the feminine he ending: ܟܬܒܗ̇ ‘her book’, to mark present tense: ܟ̇ܬܒ ‘he is writing’, etc.
  '\u0323', // ̣  Combining dot below: Use ܒ̣ to mark past tense: ܟ̣ܬܒ ‘he wrote’, etc.
  '\u0743', //  ݃ Syriac Two Vertical Dots Above • accent mark used in ancient manuscripts
  '\u0744', //  ݄ Syriac Two Vertical Dots Below • accent mark used in ancient manuscripts
  '\u0745', //  ݅ Syriac Three Dots Above • diacritic used in Turoyo for letters not found in Syriac
  '\u0746', //  ݆ Syriac Three Dots Below • diacritic used in Turoyo for letters not found in Syriac
  '\u0749', //  ݉ Syriac Music • a music mark • also used in the Syrian Orthodox Anaphora book to mark the breaking of the Eucharist bread
  '\u074A', //  ݊ Syriac Barrekh • a diacritic cross used in liturgical texts
  '\u032D', // ̭  Turoyo combining circumflex accent below
  '\u064E', //  َ Arabic fatha - Garshuni
  '\u064B', //  ً Arabic fathatan - Garshuni
  '\u064F', //  ُ Arabic damma - Garshuni
  '\u064C', //  ٌ Arabic dammatan - Garshuni
  '\u0653', //  ٓ Arabic maddah above - Garshuni
  '\u0654', //  ٔ Arabic hamza above - Garshuni
  '\u0650', //  ِ Arabic kasra - Garshuni
  '\u064D', //  ٍ Arabic kasratan - Garshuni
  '\u0655', //  َ Arabic hamza below - Garshuni
  '\u0670', //  ٰ Arabic letter superscript alef - Garshuni
  '\u0651' //  ّ Arabic shadda - Garshuni
]);

/**
 * Eastern and Western diacritics
 * @constant
 * @type { string[] }
 */
export const allDiacritics = commonDiacritics
  .concat(swadayaDiacritics)
  .concat(otherDiacritics);

/**
 * Other symbols
 * @constant
 * @type { Array.<string> }
 */
export const other = Object.freeze([
  '\u2670', // ♰ West Syriac Cross
  '\u2671' // ♱ East Syriac Cross
]);

/**
 * Vowels and diacritics: used for consonantal only mapping
 * @constant
 * @type { Array.<string> }
 */
export const dotting = Object.freeze(allVowels.concat(allDiacritics));

/**
 * Is character c a Syriac consonant? All Eastern and Western and Garshuni, etc.
 * @param { string } c input character
 * @returns { boolean } true if c is Syriac consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c a Eastern vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Eastern vowel
 */
export const isEasternVowel = c => easternVowels.indexOf(c) > -1;

/**
 * Is character c a Western vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Western vowel
 */
export const isWesternVowel = c => allWesternVowels.indexOf(c) > -1;

/**
 * Is character c a vowel? Includes both Eastern and Western.
 * @param { string } c input character
 * @returns { boolean } true if c is a vowel
 */
export const isVowel = c => allVowels.indexOf(c) > -1;

/**
 * Is character c a diacritic common to both Eastern and Western.
 * @param { string } c input character
 * @returns { boolean } true if c is a common diacritic
 */
export const isCommonDiacritic = c => commonDiacritics.indexOf(c) > -1;

/**
 * Is character c a Swadaya Eastern diacritic
 * @param { string } c input character
 * @returns { boolean } true if c is a Swadaya Eastern diacritic
 */
export const isSwadayaDiacritic = c => swadayaDiacritics.indexOf(c) > -1;

/**
 * Is character c other diacritic: common diacritic variations,
 * Western or Turoyo variations, etc.
 * @param { string } c input character
 * @returns { boolean } true if c is other type of diacritic
 */
export const isOtherDiacritic = c => otherDiacritics.indexOf(c) > -1;

/**
 * Is character c a diacritic.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacritic
 */
export const isDiacritic = c => allDiacritics.indexOf(c) > -1;

/**
 * Is character c a punctuation character.
 * @param { string } c input character
 * @returns { boolean } true if c is punctuation
 */
export const isPunctuation = c => punctuation.indexOf(c) > -1;

/**
 * Returns true if c is other character
 * @param { string } c input character
 * @returns { boolean } true if c is other character
 */
export const isOther = c => other.indexOf(c) > -1;

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = c => dotting.indexOf(c) > -1;

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = word => {
  if (!word) {
    return word;
  }

  let hasDotting = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      hasDotting = true;
    } else {
      stack.push(c);
    }
  }
  return hasDotting ? stack.join('') : word;
};
