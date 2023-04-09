import BanksList from '@/components/BanksList';
import SearchBankButton from '@/components/SearchBankButton';
import React from 'react';

export default function ListScreen() {
  return (
    <>
      <SearchBankButton />
      <BanksList />
    </>
  )
}
