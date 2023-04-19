import React from 'react'

export default function RegistradoInfo() {
  return (
    <>
      <p className='registrado-info'>
        Consulte suas contas bancárias pelo
        <a href='https://registrato.bcb.gov.br/' target='_blank' className='inline'>
        &nbsp;REGISTRADO
        </a>, site do Banco do Brasil.
        Basta acessar pelo seu login do gov.br, ir no card "Contas e Relacionamentos", em seguida clicar no botão consultar, aceitar os termos e por fim "Gerar relatório".
      </p>
    </>
  )
}
