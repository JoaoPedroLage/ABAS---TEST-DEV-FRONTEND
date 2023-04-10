import React from 'react';
import Link from 'next/link';

export default function CreatedAccountScreen() {
  return (
    <>
    <span>Conta cadastrada com sucesso!</span>
    <Link href='/'>
      <br />
      <button
        type='button'
      >
        Voltar para a página inicial
      </button>
    </Link>
  </>
  )
}
