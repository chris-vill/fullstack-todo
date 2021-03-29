import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Aside = () => {

  return (
    <Link to="/create-note">
      <Button colorScheme="twitter">
        Create Note
      </Button>
    </Link>
  );
}

export default Aside;
