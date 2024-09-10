import { SearchInput } from "@/components/ui";
import { UserList } from "@/components/widgets";
import { Stack } from "@mantine/core";
import { useState } from "react";

const UserListRoute = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack mt={80} gap={56}>
      <SearchInput onSearch={setSearchValue} />
      <UserList searchName={searchValue} />
    </Stack>
  );
};

export default UserListRoute;
