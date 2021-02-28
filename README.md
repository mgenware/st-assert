# st-assert

[![Build Status](https://github.com/mgenware/st-assert/workflows/Build/badge.svg)](https://github.com/mgenware/st-assert/actions)
[![npm version](https://img.shields.io/npm/v/st-assert.svg?style=flat-square)](https://npmjs.com/package/st-assert)
[![Node.js Version](http://img.shields.io/node/v/st-assert.svg?style=flat-square)](https://nodejs.org/en/)

Assert functions

## Installation

```sh
yarn add st-assert -D
```

## Usage

```ts
import { eq, notEq, deepEq, notDeepEq, ok } from 'st-assert';

eq = assert.strictEqual;
notEq = assert.notStrictEqual;
deepEq = assert.deepStrictEqual;
notDeepEq = assert.notDeepStrictEqual;
ok = assert.ok;
```
