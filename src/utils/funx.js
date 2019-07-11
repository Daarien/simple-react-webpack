export function take(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

export function showError(msg, error) {
  console.error(msg, error);
}

// expanding Object class with not-heritable method 'filter', which acts just like Array's filter
// !!! just for fun, not for production !!!
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((filtered, key) => {
      filtered[key] = obj[key];
      return filtered;
    }, {});
