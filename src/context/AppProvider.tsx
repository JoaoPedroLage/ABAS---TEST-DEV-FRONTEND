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
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
