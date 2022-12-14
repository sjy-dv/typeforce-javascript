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

module.exports = { ForceType };
