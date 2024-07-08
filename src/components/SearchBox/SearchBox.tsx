import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

import SearchBoxStyles from "./SearchBox.styles";
import { ISearchBoxProps } from "./SearchBox.types";

const SearchBox = (props: ISearchBoxProps) => {
  const { placeholder, name, value, onSearch } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCloseButton, setCloseButton] = useState<boolean>(false);

  const onCheckValue = (value: string): void => {
    if (value.length > 2) {
      setCloseButton(true);
    } else {
      setCloseButton(false);
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(String(e.target.value));
    onCheckValue(String(e.target.value));
  };

  const handleCloseButton = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setCloseButton(false);
  };

  useEffect(() => {
    onCheckValue(value);
  }, [value]);

  return (
    <SearchBoxStyles>
      <div className="search-box--icon left">
        <SearchOutlined />
      </div>
      <div className="search-box--input">
        <input
          defaultValue={value}
          onChange={handleChangeValue}
          ref={inputRef}
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
      {isCloseButton && (
        <button type="button" onClick={handleCloseButton} className="search-box--icon right">
          <CloseOutlined />
        </button>
      )}
    </SearchBoxStyles>
  );
};

export default SearchBox;
