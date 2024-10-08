import { Stack, Title } from "@mantine/core";
import { LoaderFallback } from "../LoaderFallback";
import { UserListItem } from "./UserListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSearchUsers } from "@/hooks/apollo";
import { useSearchParams } from "react-router-dom";
import { UserListItemSkeleton } from "./UserListItem/Skeleton";
import { useMediaQuery } from "@mantine/hooks";
import { MEDIA_XS } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const PER_LOAD = 16;
const SKELETONS = 5;
const SKELETONS_XS = 3;

export const UserList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const matches = useMediaQuery(MEDIA_XS);
  const { users, loading, fetchMore, hasNext } = useSearchUsers({
    variables: {
      query: query ?? "",
      limit: PER_LOAD,
    },
    skip: !query,
  });
  const { t } = useTranslation();

  const [ref] = useIntersectionObserver<HTMLDivElement>({
    onChange: (isIntersecting) => hasNext && isIntersecting && fetchMore(),
  });

  if (query && !loading && !users?.length) {
    return (
      <Title order={3} ta={"center"}>
        {t("translation:user:noFound")}
      </Title>
    );
  }

  return (
    <Stack mih={400} pos="relative">
      {loading && <LoaderFallback />}
      <Stack component="ul" pl={0}>
        {users?.map((user) => (
          <UserListItem key={`user-${user.login}`} user={user} />
        ))}
      </Stack>
      <Stack ref={ref}>
        {hasNext &&
          [...new Array(matches ? SKELETONS : SKELETONS_XS)].map((_, index) => (
            <UserListItemSkeleton key={index} />
          ))}
      </Stack>
    </Stack>
  );
};
