import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { GroupBase, OptionProps } from 'react-select';
import { FilterOptionOption } from 'react-select/dist/declarations/src/filters';

// components
import AssetSelectOption from './AssetSelectOption';

// constants
import { BODY_BACKGROUND_COLOR } from '@app/constants';
import { OPTION_HEIGHT } from './constants';

// theme
import { theme } from '@app/theme';

// types
import type { IOption, IProps } from './types';
import { useColorModeValue } from '@chakra-ui/react';

const AssetSelect: FC<IProps> = ({
  assets,
  disabled = false,
  onAssetChange,
  width,
}: IProps) => {
  const { t } = useTranslation();
  // hooks
  const defaultTextColor: string = useColorModeValue(
    theme.colors.gray['600'],
    theme.colors.whiteAlpha['800']
  );
  // handlers
  const handleAssetChange = (option: IOption) => onAssetChange(option.value);
  const handleSearchFilter = (
    { data }: FilterOptionOption<IOption>,
    inputValue: string
  ) => {
    return (
      data.value.id.toUpperCase().includes(inputValue.toUpperCase()) ||
      data.value.symbol.toUpperCase().includes(inputValue.toUpperCase()) ||
      data.value.name.toUpperCase().includes(inputValue.toUpperCase())
    );
  };

  return (
    <Select
      components={{
        Option: ({
          data,
          innerProps,
        }: OptionProps<IOption, false, GroupBase<IOption>>) => (
          <AssetSelectOption asset={data.value} onClick={innerProps.onClick} />
        ),
      }}
      isDisabled={disabled}
      isSearchable={true}
      filterOption={handleSearchFilter}
      onChange={handleAssetChange}
      options={assets.map<IOption>((value) => ({
        value,
      }))}
      placeholder={t('placeholders.assetSelect')}
      backspaceRemovesValue={true}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: BODY_BACKGROUND_COLOR,
          height: OPTION_HEIGHT,
          width: width || '100%',
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: BODY_BACKGROUND_COLOR,
          cursor: 'pointer',
          height: '100%',
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: defaultTextColor,
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: BODY_BACKGROUND_COLOR,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: defaultTextColor,
        }),
      }}
      theme={(value) => ({
        ...value,
        colors: {
          ...theme.colors,
          primary: theme.colors.primary['500'],
          primary25: theme.colors.primary['200'],
          primary50: theme.colors.primary['300'],
          primary75: theme.colors.primary['400'],
        },
      })}
    />
  );
};

export default AssetSelect;
