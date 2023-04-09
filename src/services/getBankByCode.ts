export default async function getBanksList(code: number): Promise<{}>{
  const URL = `https://brasilapi.com.br/api/banks/v1/${code}`;
  const request = await fetch(URL, {
      method: 'GET',
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  });

  const response = await request.json();

  return response;
}
