export function take(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

export function showError(msg, error) {
  console.error(msg, error);
}
