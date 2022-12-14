## Installation

```bash
// with npm
npm i i-hate-typescript
```

##EXPLAIN

## Sample Code

```js
/*
    type select default value
    string type is ""
    float, double int is 0
    boolean is true or false default you choose
*/

//example
console.log(ForceType({ a: 0.1 }, { a: 1 }));
console.log(ForceType({ a: 2 }, { a: 1 }));
console.log(ForceType({ a: "" }, { a: 1 }));
console.log(ForceType({ a: true }, { a: 1 }));

//output
// { a: 1 }
// { a: 1 }
// { a: undefined }
// { a: undefined }
```

### You can use Server Code

```js
const express = require("express");
const app = express();
app.use(express.json());
const { ForceType } = require("i-hate-typescript");

let spec = {
  name: "",
  password: "",
  gender: true,
};

app.post("/test", (req, res) => {
  let unmarshal = ForceType(spec, req.body);
  res.status(200).json(unmarshal);
});

app.listen(8888, () => {
  console.log("server boot");
});
```

### output

```bash
console.log(unmarshal);
//output : { name: 'test', password: 'test01041', gender: undefined }
```

![img](output.png)
