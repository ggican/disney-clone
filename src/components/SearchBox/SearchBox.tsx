import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useLayoutEffect, useRef, useState } from "react";

import SearchBoxStyles from "./SearchBox.styles";
import { ISearchBoxProps } from "./SearchBox.types";

const SearchBox = (props: ISearchBoxProps) => {
  const { placeholder, name, value, onSearch } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setFocus] = useState<boolean>(false);
  const [isCloseButton, setCloseButton] = useState<boolean>(false);

  useLayoutEffect(() => {});
  const handleOnFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  const onCheckValue = (value: string): void => {
    if (value.length > 2) {
      setCloseButton(true);
    } else {
      setCloseButton(false);
    }
    onSearch(value);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckValue(String(e.target.value));
  };

  const handleCloseButton = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setCloseButton(false);
  };

  return (
    <SearchBoxStyles>
      <div className="search-box--icon left">
        <SearchOutlined />
      </div>
      <div className="search-box--input">
        <input
          defaultValue={value}
          onChange={handleChangeValue}
          onFocus={handleOnFocus}
          onBlur={onBlur}
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
