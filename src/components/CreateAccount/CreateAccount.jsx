import React, { useState } from 'react';

import ChooseAccount from './ChooseAccount';
import ChooseName from './ChooseName';

const CreateAccount = () => {
  const [nextStep, setNextStep] = useState(false);
  const [clientData, setClientData] = useState({ account: 'alias', name: '' });

  return (
    <>
      {!nextStep
        ? <ChooseAccount
          setNextStep={setNextStep}
          setClientData={setClientData}
          clientData={clientData}
        />
        : <ChooseName
          setClientData={setClientData}
          clientData={clientData}
        />
      }
    </>
  );
};

export default CreateAccount;
