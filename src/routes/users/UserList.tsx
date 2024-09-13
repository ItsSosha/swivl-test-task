import { SearchInput } from "@/components/ui";
import { UserList } from "@/components/widgets";
import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const UserListRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const onSearch = (value: string) => {
    setSearchParams((params) => ({ ...params, q: value }));
  };

  return (
    <Stack mt={80} gap={56}>
      <SearchInput
        onSearch={onSearch}
        searchValue={searchParams.get("q") ?? ""}
        placeholder={t("translation:user:searchPlaceholder")}
      />
      <UserList />
    </Stack>
  );
};

export default UserListRoute;
