[![npm](https://img.shields.io/npm/v/palantiri-test.svg?maxAge=2592000)](https://www.npmjs.com/package/palantiri-test)

# Palantiri-test

## Description

A set of simple bots to test the Palantiri drivers

## Usage

````bash
# Install the module
npm install --save palantiri-test
# Use the definitions
typings install -S npm:palantiri-test
````

````typescript
import {echoBot} from "palantiri-test";

let connection: palantiri.Connection = new Connection(options);

echoBot(connection);
````
