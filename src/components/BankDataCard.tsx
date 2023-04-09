import React from 'react';
import Link from 'next/link';

type Account = {
  ispb: string;
  name: string;
  code: string;
  fullName: string;
};

export default function BankDataCard({ bank }: any): JSX.Element {
  
  function handleCLick() {
    const AcconuntData: Account = {
      ispb: bank.ispb,
      name: bank.name,
      code: bank.code,
      fullName: bank.fullName
    };
  
    localStorage.setItem(
      'bankData',
      JSON.stringify(AcconuntData)
    );
  }

  return (
    <>
      {bank.name ?
        <div>
          <br />
          <span>
            Banco: {bank.name}
          </span>
          <br />
          {bank.code &&
            <>
              <span>
                Código: {bank.code}
              </span>
              <br />
            </>
          }
          <Link href="/registration-screen">
            <button
              type='button'
              onClick={() => handleCLick()}
            >
              Selecionar Banco
            </button>
          </Link>
        </div>
        :
        <span>
          {bank.message}
        </span>
      }
    </>
  )
}
