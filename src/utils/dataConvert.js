/**
 * 取任意级别city选项
 * @param {} cityOptions
 * @param {*} limit
 * @param {*} deep
 */
function getSomeCitys(childFieldName) {
  return function getSomeCitysInner(cityOptions, limit, deep) {
    cityOptions = cityOptions || [];
    deep = deep || 0;
    deep++;
    const converted = cityOptions.map(item => {
      const res = {};
      for (const key of Object.keys(item)) {
        if (key !== childFieldName) {
          res[key] = item[key];
        }
      }
      if (deep < limit) {
        res[childFieldName] = getSomeCitysInner(
          item[childFieldName],
          limit,
          deep
        );
      }
      return res;
    });
    return converted;
  };
}

/**
 * 扁平化层级选项
 * @param {*} data
 * @param {*} childFieldName
 */
function flatHierarchyOptions(data, childFieldName) {
  const flatedData = [];
  function hierarchy(data) {
    data = data || [];
    for (const item of data) {
      flatedData.push(item);
      const childItems = item[childFieldName];
      if (childItems) {
        delete item[childFieldName];
        hierarchy(childItems);
      }
    }
  }
  data = JSON.parse(JSON.stringify(data));
  hierarchy(data, childFieldName);
  return flatedData;
}

export { getSomeCitys, flatHierarchyOptions };
