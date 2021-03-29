import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, CloseButton, FormControl, Input, Textarea } from '@chakra-ui/react';

const NoteForm = () => {

  return (
    <FormControl>
      <HStack mt="4px" mb="16px">
        <Input
          variant="outline"
          placeholder="Title"
          borderColor="rgb(29, 161, 242)"
          _hover={{
            borderColor: "rgb(29, 161, 242)",
            borderWidth: "2px"
          }}
          _placeholder={{
            color: "rgb(100, 100, 100)"
          }}
        />
        <Link to="/notes">
          <CloseButton/>
        </Link>
      </HStack>
      <Textarea
        variant="outline"
        colorScheme="twitter"
        placeholder="Body"
        borderColor="rgb(29, 161, 242)"
        _hover={{
          borderColor: "rgb(29, 161, 242)",
          borderWidth: "2px"
        }}
        _placeholder={{
          color: "rgb(100, 100, 100)"
        }}
      />
    </FormControl>
  );
}

export default NoteForm;
