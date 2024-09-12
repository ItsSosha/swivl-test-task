import { Stack } from "@mantine/core";
import { LoaderFallback } from "../LoaderFallback";
import { SearchedUser } from "@/types";
import { UserListItem } from "./UserListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSearchUsers } from "@/hooks/apollo";
import { useSearchParams } from "react-router-dom";
import { UserListItemSkeleton } from "./UserListItem/Skeleton";
import { useMediaQuery } from "@mantine/hooks";
import { MEDIA_XS } from "@/utils/constants";

const PER_LOAD = 16;
const SKELETONS = 5;
const SKELETONS_XS = 3;

export const UserList = () => {
  const [searchParams] = useSearchParams();
  const matches = useMediaQuery(MEDIA_XS);
  const { users, loading, fetchMore, hasNext } = useSearchUsers({
    variables: {
      query: searchParams.get("q") ?? "",
      limit: PER_LOAD,
    },
    skip: !searchParams.get("q"),
  });

  const [ref] = useIntersectionObserver<HTMLDivElement>({
    onChange: (isIntersecting) => hasNext && isIntersecting && fetchMore(),
  });

  return (
    <Stack mih={400} pos="relative">
      {loading && <LoaderFallback />}
      <Stack component="ul" pl={0}>
        {users?.map((user) => (
          <UserListItem key={user.login} user={user} />
        ))}
      </Stack>
      <Stack ref={ref}>
        {hasNext &&
          [...new Array(matches ? SKELETONS : SKELETONS_XS)].map((_) => (
            <UserListItemSkeleton />
          ))}
      </Stack>
    </Stack>
  );
};
