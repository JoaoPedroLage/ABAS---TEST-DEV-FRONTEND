import { useContext, FormEvent } from 'react';
import AppContext from '../context/AppContext';
import getBankByCode from '@/services/getBankByCode'

export default function SearchBankButton() {
  const {
    code,
    setCode,
    setBanksList
  } = useContext(AppContext);

  async function searchBankByCode(event: FormEvent) {
    event.preventDefault();

    try {
      const response: any = await getBankByCode(code);

      setBanksList([response]);

      if (!response.ok) {
        throw new Error(`Erro ao fazer a requisição. ${response.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form
        className='form-search'
        onSubmit={(e) => searchBankByCode(e)}
      >
        <input
          className='search-input'
          placeholder='Código do Banco'
          onChange={(event) => setCode(Number(event.target.value))}
        />
        <button
          className='button-search-bank'
          type='submit'
        >
          Pesquisar
        </button>
      </form>
    </>
  )
}
