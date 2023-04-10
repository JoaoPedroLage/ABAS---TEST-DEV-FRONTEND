import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Link from 'next/link';

export default function CreatedAccountScreen() {
  const {
    setBankAgency,
    setBankAccount
  } = useContext(AppContext);

  function resetSelectedBankData() {
    setBankAgency('');
    setBankAccount('');
  }

  useEffect(() => {
    resetSelectedBankData();
  }, []);

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
