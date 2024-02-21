import { HStack, Text, Tooltip } from '@chakra-ui/react';
import React, { FC } from 'react';

// components
import WarningIcon from '@app/components/WarningIcon';

// constants
import { PAGE_ITEM_HEIGHT } from '@app/constants';

// hooks
import useDefaultTextColor from '@app/hooks/useDefaultTextColor';

// types
import { IProps } from './types';

const PageItem: FC<IProps> = ({
  label,
  tooltipLabel,
  value,
  warningLabel,
  ...stackProps
}: IProps) => {
  // hooks
  const defaultTextColor: string = useDefaultTextColor();

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      minH={PAGE_ITEM_HEIGHT}
      spacing={2}
      w="full"
      {...stackProps}
    >
      {/*label*/}
      <Text color={defaultTextColor} fontSize="xs">
        {label}
      </Text>

      <HStack flexGrow={1} justifyContent="flex-end" spacing={2} w="full">
        {/*value*/}
        {tooltipLabel ? (
          <Tooltip
            aria-label={`A tooltip displaying the label ${tooltipLabel}`}
            label={tooltipLabel}
          >
            {value}
          </Tooltip>
        ) : (
          value
        )}

        {/*warning*/}
        {warningLabel && <WarningIcon tooltipLabel={warningLabel} />}
      </HStack>
    </HStack>
  );
};

export default PageItem;
