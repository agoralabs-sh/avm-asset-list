// enums
import { EnvironmentEnum } from '../enums';

interface IWebpackEnvironmentVariables {
  WEBPACK_SERVE?: boolean;
  WEBPACK_WATCH?: boolean;
  environment?: EnvironmentEnum;
}

export default IWebpackEnvironmentVariables;
