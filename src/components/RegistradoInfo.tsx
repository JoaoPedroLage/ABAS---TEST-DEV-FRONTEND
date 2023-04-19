import React from 'react'

export default function RegistradoInfo() {
  return (
    <>
      <p className='registrado-info'>
        Consulte todas as contas bancárias no seu nome pelo
        <a href='https://registrato.bcb.gov.br/' target='_blank' className='inline'>
        &nbsp;REGISTRATO
        </a>, site do Banco do Brasil.
        Basta acessar pelo seu login do gov.br, ir no card "Contas e Relacionamentos", em seguida clicar no botão consultar, aceitar os termos e por fim "Gerar relatório".
      </p>
    </>
  )
}
