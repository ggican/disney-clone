export type ISearchBoxProps = {
  title?: string;
  name: string;
  placeholder: string;
  value: string;
  onSearch: (value: string) => void;
};
