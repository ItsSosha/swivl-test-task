import { ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IoMdArrowRoundUp } from "react-icons/io";

type ScrollToTopProps = {
  threshold?: number;
};

export const ScrollToTop = ({
  threshold = window.innerHeight,
}: ScrollToTopProps) => {
  const [scroll, scrollTo] = useWindowScroll();

  const hidden = scroll.y < threshold;

  return hidden ? null : (
    <ActionIcon
      onClick={() =>
        scrollTo({
          y: 0,
        })
      }
      pos="fixed"
      size="xl"
      right={40}
      bottom={40}
      radius="xl"
    >
      <IoMdArrowRoundUp size={32} />
    </ActionIcon>
  );
};
