import React, { useState } from 'react';
import ChoseAccount from './ChoseAccount';
import ChoseName from './ChoseName';

const CreateAccount = () => {
  const [nextStep, setNextStep] = useState(false);

  return (
    <>
      {!nextStep
        ? <ChoseAccount setNextStep={setNextStep} />
        : <ChoseName setNextStep={setNextStep} />
      }
    </>
  );
};

export default CreateAccount;
