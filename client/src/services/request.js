export default async function request() {
  const response = await fetch('http://localhost:8000/v1/bicycle');

  const data = await response.json();
  return data;
}
