import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import BankDataCard from './BankDataCard';
import getBanksList from '@/services/getBanksList';
import InfiniteScroll from 'react-infinite-scroller';

export default function BanksList() {
  const {
    banksList,
    setBanksList,
    scrollBanksList,
    setScrollBanksList,
    numberOfScroll,
    setNumberOfScroll
  } = useContext(AppContext);

  async function fetchBanksList() {
    const response = await getBanksList();

    setBanksList(response);
  }

  function updateScrollBanksList() {
    const newScroll = banksList.slice(0, 10 * numberOfScroll);

    setScrollBanksList(newScroll);
    setNumberOfScroll(numberOfScroll + 1);
  }

  useEffect(() => {
    fetchBanksList();
  }, []);

  useEffect(() => {
    updateScrollBanksList();
  }, [banksList]);

  return (
    <>
      <InfiniteScroll
        className="Cards"
        loadMore={updateScrollBanksList}
        hasMore={true}
        threshold={50}
        initialLoad={false}
        style={{ width: '100%' }}
      >
        {scrollBanksList.map((bank: any) => (
          <BankDataCard
            key={bank.ispb}
            bank={bank}
          />
        ))}
      </InfiniteScroll >
    </>
  )
}

