# Readme

## Installation

```bash
npm i jwt-extractor
```



## Use as a function

```javascript
import { payloadExtractor } from 'jwt-extractor'
OR
const { payloadExtractor } = requrie('jwt-extractor')

payloadExtractor(token, "propertyName") //=> propertyName | undefined
```



