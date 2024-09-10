import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@mantine/core";
import { MdOutlineSearch } from "react-icons/md";

type SearchInputProps = {
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [debouncedSearch, cancelSearch] = useDebounce(onSearch, 700);

  const handleSearch = (value: string) => {
    if (value) {
      debouncedSearch(value);
    } else {
      cancelSearch();
    }
  };

  return (
    <Input
      size="xl"
      placeholder="Type somethings to search..."
      leftSection={<MdOutlineSearch size={30} />}
      onChange={(e) => handleSearch(e.target.value)}
      radius="lg"
    />
  );
};
