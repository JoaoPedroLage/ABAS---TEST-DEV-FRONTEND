import { useState } from 'react';
import AppContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [invalidUser, setInvalidUser] = useState(false);
  const [userHasAccounts, setUserHasAccounts] = useState(false);
  const [userAccounts, setUserAccounts] = useState([]);
  const [banksList, setBanksList] = useState([]);
  const [scrollBanksList, setScrollBanksList] = useState([]);
  const [numberOfScroll, setNumberOfScroll] = useState(1);
  const [code, setCode] = useState(0);
  const [selectedBank, setSelectedBank] = useState({});
  const [bankAgency, setBankAgency] = useState('');
  const [bankAccount, setBankAccount] = useState('');

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    visible,
    setVisible,
    name,
    setName,
    token,
    setToken,
    invalidUser,
    setInvalidUser,
    userHasAccounts,
    setUserHasAccounts,
    userAccounts,
    setUserAccounts,
    banksList,
    setBanksList,
    scrollBanksList,
    setScrollBanksList,
    numberOfScroll,
    setNumberOfScroll,
    code,
    setCode,
    selectedBank,
    setSelectedBank,
    bankAgency,
    setBankAgency,
    bankAccount,
    setBankAccount
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
