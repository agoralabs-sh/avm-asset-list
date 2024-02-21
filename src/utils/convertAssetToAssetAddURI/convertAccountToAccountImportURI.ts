import {
  decode as decodeBase64,
  encodeURLSafe as encodeBase64URLSafe,
} from '@stablelib/base64';

// types
import type { IAsset } from '@app/types';

/**
 * Convenience function that simple converts an asset to the URI scheme used by ARC-0300 to add an asset.
 * @param {IAsset} asset - the asset to convert.
 * @returns {string} a URI scheme to be used to add the asset.
 */
export default function convertAssetToAssetAddURI(asset: IAsset): string {
  return `avm://asset/add/${asset.id}?genesishash=${encodeBase64URLSafe(decodeBase64(asset.network.genesisHash))}&type=${asset.type}`;
}
