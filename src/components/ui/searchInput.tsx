import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (SearchText: string) => void;
}

const searchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
        style={{ width: "100%" }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search Games..."
            variant="filled"
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default searchInput;
