import React, { useState } from 'react';
import ChoseAccount from './ChoseAccount';
import ChoseName from './ChoseName';

const CreateAccount = () => {
  const [nextStep, setNextStep] = useState(false);
  const [clientData, setClientData] = useState({ account: '', name: '' });

  return (
    <>
      {!nextStep
        ? <ChoseAccount
          setNextStep={setNextStep}
          setClientData={setClientData}
          clientData={clientData}
        />
        : <ChoseName
          setClientData={setClientData}
          clientData={clientData}
        />
      }
    </>
  );
};

export default CreateAccount;
