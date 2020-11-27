# Readme

## About

This is a module which allows for a payload or individual properties of a payload to be extracted from a Base64 encoded JWT token.

## Installation

```bash
npm i jwt-extractor
```

## Use as a function

Use one of the following functions to retrieve the payload or a payload property.

```javascript
import { payloadProperty, payload } from "../index";

payload(token) //=> payload | undefined
payloadProperty(token, 'propertyName') // => property | undefined
```

## Use as a Class

Could be useful if you want to return to the class to retrieve something from the payload/the payload itself again in the future without having to re-decode the token.

```javascript
import { TokenDecoder } from "../index";

const Decoder = new TokenDecoder(token)

Decoder.getPayload() // => payload | undefined
Decoder.getProperty(propertyName) // => property | undefined
```
