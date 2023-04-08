import React from 'react'

export default function BankDataCard({ bank }: any): JSX.Element {
  return (
    <>
      {bank.name &&
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
          <button>
            Selecionar Banco
          </button>
        </div>
      }
    </>
  )
}
