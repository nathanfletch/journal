# Project Title
Simple overview of use/purpose.  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/nathan_fletcher.svg?style=social&label=Follow%20%40nathan_fletcher)](https://twitter.com/nathan_fletcher)

## Author

Nathan Fletcher

## Description

## Techonologies used:

## Setup

## Known Bugs

There are no known bugs at this time.

## Future Plans

## Contact

The best way to reach me is by [email](mailto:nathan.fletcher@gmail.com).

## License

The MIT License (MIT)

Copyright (c) 2021 Nathan Fletcher

<!-- Journal
  properties:
    entries: {}
  methods:
    addEntry
    deleteEntry
    editEntry -->

Entry 
  properties:
    title
    body
    date
  methods:
    numWords - split entry (body) into an array, return length
    numVowels - .split("")  - regex - [a,e,i,o,u].includes (.filter)
    numConsonants - same step
    getTeaser - .split(".?!") for the first .slice(0,8)
    /[.!?]/g

UI
(ui)display all entries