import { IAsset } from '@app/types';

interface IProps {
  assets: IAsset[];
  disabled?: boolean;
  onAssetChange: (value: IAsset) => void;
  width?: string | number;
}

export default IProps;
