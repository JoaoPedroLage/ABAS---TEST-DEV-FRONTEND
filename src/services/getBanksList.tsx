export default async function getBanksList() {
  const URL = `https://brasilapi.com.br/api/banks/v1`;
  const request = await fetch(URL, {
      method: 'GET',
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  });

  const response = await request.json();

  return response;
}
