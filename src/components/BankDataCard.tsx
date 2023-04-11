import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Link from 'next/link';

type Account = {
  ispb: number;
  name: string;
  code: number;
  fullName: string;
};

export default function BankDataCard({ bank, index }: any): JSX.Element {
  const {
    setNumberOfScroll
  } = useContext(AppContext);

  function handleCLick() {
    const AccountData: Account = {
      ispb: bank.ispb,
      name: bank.name,
      code: bank.code,
      fullName: bank.fullName
    };

    localStorage.setItem('AccountData', JSON.stringify([AccountData]));
    setNumberOfScroll(0);
  }

  return (
    <>
      {bank.name ?
        <div
          className='card'
          key={index}
        >
          <br />
          <span>
            Banco: {bank.name}
          </span>
          <br />
          {
            bank.code &&
            <>
              <span>
                Código: {bank.code}
              </span>
              <br />
            </>
          }
          <Link href='/registration-screen'>
            <button
              type='button'
              onClick={() => handleCLick()}
            >
              Selecionar Banco
            </button>
          </Link>
        </div>
        :
        <>
          <div className="">
            <span>
              {bank.message}
            </span>
            <div
              className='card-come-back'
            >
              <button
                type='button'
                onClick={() => document.location.reload()}
              >
                Voltar à lista
              </button>
            </div>
          </div>
        </>
      }
    </>
  )
}
