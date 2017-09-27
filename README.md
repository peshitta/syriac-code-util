# syriac-code-util

[![npm version](https://badge.fury.io/js/syriac-code-util.svg)](https://badge.fury.io/js/syriac-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/syriac-code-util.svg)](https://www.npmjs.org/package/syriac-code-util)
[![Build Status](https://travis-ci.org/peshitta/syriac-code-util.svg?branch=master)](https://travis-ci.org/peshitta/syriac-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/syriac-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/syriac-code-util.svg)](https://david-dm.org/peshitta/syriac-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/syriac-code-util/dev-status.svg)](https://david-dm.org/peshitta/syriac-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/syriac-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/syriac-code-util?branch=master)

Utility functions for Syriac Unicode

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install syriac-code-util --save
```

Following bundles are available:
* `syriac-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `syriac-code-util.min.js` - minified version of `syriac-code-util.js`
* `syriac-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/syriac-code-util/-/syriac-code-util-1.0.2.tgz](https://registry.npmjs.org/syriac-code-util/-/syriac-code-util-1.0.2.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/syriac-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/syriac-code-util/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [syriac](#module_syriac)
    * [.consonants](#module_syriac.consonants) : <code>Array.&lt;string&gt;</code>
    * [.extraConsonants](#module_syriac.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_syriac.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_syriac.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.easternCommonVowels](#module_syriac.easternCommonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternOnlyVowels](#module_syriac.easternOnlyVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_syriac.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.westernVowels](#module_syriac.westernVowels) : <code>Array.&lt;string&gt;</code>
    * [.westernVowelsBellow](#module_syriac.westernVowelsBellow) : <code>Array.&lt;string&gt;</code>
    * [.allWesternVowels](#module_syriac.allWesternVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_syriac.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.commonDiacritics](#module_syriac.commonDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.swadayaDiacritics](#module_syriac.swadayaDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.otherDiacritics](#module_syriac.otherDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.allDiacritics](#module_syriac.allDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.other](#module_syriac.other) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_syriac.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_syriac.isConsonant) ⇒ <code>boolean</code>
    * [.isEasternVowel](#module_syriac.isEasternVowel) ⇒ <code>boolean</code>
    * [.isWesternVowel](#module_syriac.isWesternVowel) ⇒ <code>boolean</code>
    * [.isVowel](#module_syriac.isVowel) ⇒ <code>boolean</code>
    * [.isCommonDiacritic](#module_syriac.isCommonDiacritic) ⇒ <code>boolean</code>
    * [.isSwadayaDiacritic](#module_syriac.isSwadayaDiacritic) ⇒ <code>boolean</code>
    * [.isOtherDiacritic](#module_syriac.isOtherDiacritic) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_syriac.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_syriac.isPunctuation) ⇒ <code>boolean</code>
    * [.isOther](#module_syriac.isOther) ⇒ <code>boolean</code>
    * [.isDotting](#module_syriac.isDotting) ⇒ <code>boolean</code>
    * [.removeDotting](#module_syriac.removeDotting) ⇒ <code>string</code>

<a name="module_syriac.consonants"></a>

### syriac.consonants : <code>Array.&lt;string&gt;</code>
Syriac base 22 consonants

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.extraConsonants"></a>

### syriac.extraConsonants : <code>Array.&lt;string&gt;</code>
Syriac extra consonants: Garshuni, ancient, Persian, Sogdian, Palestinian, etc.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.allConsonants"></a>

### syriac.allConsonants : <code>Array.&lt;string&gt;</code>
All Syriac consonants including Garshuni, Persian, Sogdian and Palestinian, etc.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.punctuation"></a>

### syriac.punctuation : <code>Array.&lt;string&gt;</code>
Syriac punctuation

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.easternCommonVowels"></a>

### syriac.easternCommonVowels : <code>Array.&lt;string&gt;</code>
Eastern common vowels - common to Western Syriac as well

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.easternOnlyVowels"></a>

### syriac.easternOnlyVowels : <code>Array.&lt;string&gt;</code>
Eastern only vowels

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.easternVowels"></a>

### syriac.easternVowels : <code>Array.&lt;string&gt;</code>
Eastern vowels

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.westernVowels"></a>

### syriac.westernVowels : <code>Array.&lt;string&gt;</code>
Western vowels

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.westernVowelsBellow"></a>

### syriac.westernVowelsBellow : <code>Array.&lt;string&gt;</code>
Western vowels below line

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.allWesternVowels"></a>

### syriac.allWesternVowels : <code>Array.&lt;string&gt;</code>
All Western vowels

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.allVowels"></a>

### syriac.allVowels : <code>Array.&lt;string&gt;</code>
Eastern and Western vowels

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.commonDiacritics"></a>

### syriac.commonDiacritics : <code>Array.&lt;string&gt;</code>
Diacritics common to both Eastern and Western
Qushaya, Rukkakha, Line under, Seyame

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.swadayaDiacritics"></a>

### syriac.swadayaDiacritics : <code>Array.&lt;string&gt;</code>
Swadaya Eastern diacritics

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.otherDiacritics"></a>

### syriac.otherDiacritics : <code>Array.&lt;string&gt;</code>
Other diacritics: Qushaya, Rukkakha, Line variations, etc.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.allDiacritics"></a>

### syriac.allDiacritics : <code>Array.&lt;string&gt;</code>
Eastern and Western diacritics

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.other"></a>

### syriac.other : <code>Array.&lt;string&gt;</code>
Other symbols

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.dotting"></a>

### syriac.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
<a name="module_syriac.isConsonant"></a>

### syriac.isConsonant ⇒ <code>boolean</code>
Is character c a Syriac consonant? All Eastern and Western and Garshuni, etc.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is Syriac consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isEasternVowel"></a>

### syriac.isEasternVowel ⇒ <code>boolean</code>
Is character c a Eastern vowel?

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is Eastern vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isWesternVowel"></a>

### syriac.isWesternVowel ⇒ <code>boolean</code>
Is character c a Western vowel?

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is Western vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isVowel"></a>

### syriac.isVowel ⇒ <code>boolean</code>
Is character c a vowel? Includes both Eastern and Western.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is a vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isCommonDiacritic"></a>

### syriac.isCommonDiacritic ⇒ <code>boolean</code>
Is character c a diacritic common to both Eastern and Western.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is a common diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isSwadayaDiacritic"></a>

### syriac.isSwadayaDiacritic ⇒ <code>boolean</code>
Is character c a Swadaya Eastern diacritic

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is a Swadaya Eastern diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isOtherDiacritic"></a>

### syriac.isOtherDiacritic ⇒ <code>boolean</code>
Is character c other diacritic: common diacritic variations,
Western or Turoyo variations, etc.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is other type of diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isDiacritic"></a>

### syriac.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isPunctuation"></a>

### syriac.isPunctuation ⇒ <code>boolean</code>
Is character c a punctuation character.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is punctuation  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isOther"></a>

### syriac.isOther ⇒ <code>boolean</code>
Returns true if c is other character

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is other character  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.isDotting"></a>

### syriac.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_syriac.removeDotting"></a>

### syriac.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>syriac</code>](#module_syriac)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

