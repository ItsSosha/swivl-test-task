import { Center, Loader, Overlay, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const LoaderFallback = () => {
  const { t } = useTranslation();

  return (
    <Overlay backgroundOpacity={0.5} color="#FFF" component={Center}>
      <Stack gap={"sm"} align="center">
        <Text fw={800} fz="h2">
          {t("translation:holdOn")}
        </Text>
        <Loader size={100} />
      </Stack>
    </Overlay>
  );
};
