import React from 'react';
import { useParams } from 'react-router';

const ClientsProfile = () => {
  const { id } = useParams();
  return (
    <h1>Clients {id}</h1>
  );
};

export default ClientsProfile;
