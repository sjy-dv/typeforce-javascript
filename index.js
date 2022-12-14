function ForceType(obj, response) {
  let getEntity = Object.keys(obj);
  for (let i = 0; i < getEntity.length; i++) {
    obj[getEntity[i]] = UnMarshal(obj[getEntity[i]], response[getEntity[i]]);
  }
  return obj;
}

function UnMarshal(baseEntity, inputEntity) {
  if (typeof baseEntity == typeof inputEntity) {
    return inputEntity;
  }
  return undefined;
}

console.log(ForceType({ a: 0.1 }, { a: 1 }));
console.log(ForceType({ a: 2 }, { a: 1 }));
console.log(ForceType({ a: "" }, { a: 1 }));
console.log(ForceType({ a: true }, { a: 1 }));
