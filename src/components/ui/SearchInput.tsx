import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@mantine/core";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

type SearchInputProps = {
  onSearch: (searchValue: string) => void;
  searchValue?: string;
  placeholder?: string;
};

export const SearchInput = ({
  onSearch,
  searchValue,
  placeholder,
}: SearchInputProps) => {
  const [debouncedSearch, cancelSearch] = useDebounce(onSearch, 700);
  const [value, setValue] = useState(searchValue ?? "");

  const handleSearch = (value: string) => {
    if (value) {
      debouncedSearch(value);
    } else {
      cancelSearch();
    }
    setValue(value);
  };

  useEffect(() => {
    setValue(value);
  }, [searchValue]);

  return (
    <Input
      size="xl"
      placeholder={placeholder}
      leftSection={<MdOutlineSearch size={30} />}
      value={value}
      onChange={(e) => handleSearch(e.target.value)}
      radius="lg"
    />
  );
};
