export default async function request(
  url = 'http://localhost:8000/v1/bicycle',
  method = 'GET',
  body = null,
  headers = { 'Content-Type': 'application/json' }
) {
  const response = await fetch(url, { method, body, headers });
  const data = await response.json();
  return data;
}
