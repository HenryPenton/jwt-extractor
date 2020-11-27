# Readme

## About



## Installation

```bash
npm i jwt-extractor
```

## Use as a function

```javascript
import { payloadProperty, payload } from "../index";

payload(token) //=> payload | undefined
payloadProperty(token, 'propertyName') // => property | undefined
```

## Use as a Class

```javascript
import { TokenDecoder } from "../index";

payload(token) //=> payload | undefined
payloadProperty(token, 'propertyName') // => property | undefined
```



