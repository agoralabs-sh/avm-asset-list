import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps extends IconProps {
  networkTheme?: string;
}
const AssetIcon: FC<IProps> = ({ networkTheme, ...iconProps }: IProps) => {
  return (
    <Icon viewBox="0 0 546.1333 546.1333" {...iconProps}>
      <path
        d="M 247.99998,545.00468 C 182.70059,538.2683 126.43624,511.61923 80.475152,465.65815 33.839468,419.02246 7.1798248,362.05066 1.0845551,295.99998 -4.0892092,239.9351 10.143349,179.91041 40.25787,130.78963 61.800503,95.650746 95.650746,61.800503 130.78963,40.25787 179.91041,10.143349 239.9351,-4.0892092 295.99998,1.0845551 362.05066,7.1798248 419.02246,33.839468 465.65815,80.475152 c 47.08174,47.081748 73.54701,104.059678 79.47493,171.104098 2.18015,24.65735 0.98452,30.33664 -7.63119,36.24847 -3.03468,2.0823 -4.65091,2.42332 -9.78292,2.06423 -6.91794,-0.48406 -10.81299,-2.77896 -14.0241,-8.26278 -1.61827,-2.76362 -2.21703,-6.75356 -2.90491,-19.35729 -1.82993,-33.52911 -8.97396,-62.19484 -22.69683,-91.07189 -12.03854,-25.33271 -26.39707,-45.53746 -47.00972,-66.1501 C 413.36907,77.335555 383.58265,58.982827 346.75619,46.930724 321.3709,38.622944 299.94678,35.217502 273.06665,35.217502 c -26.88013,0 -48.30425,3.405442 -73.68954,11.713222 -36.82646,12.052103 -66.61288,30.404831 -94.32722,58.119166 -27.714335,27.71434 -46.067063,57.50076 -58.119166,94.32722 -12.821728,39.17814 -15.25533,78.9566 -7.346941,120.08954 6.389993,33.23548 22.346941,68.64914 43.938828,97.51455 9.808104,13.1121 32.517389,35.82139 45.629489,45.62949 62.47917,46.73565 140.34731,60.3753 214.52719,37.57734 42.24417,-12.98305 82.53144,-39.65015 110.93624,-73.43135 23.94588,-28.47829 40.25735,-60.73152 50.37431,-99.60688 3.13714,-12.05475 4.82538,-14.83388 10.81356,-17.80099 7.87371,-3.90135 16.16748,-1.99119 21.45523,4.94142 3.99508,5.2378 4.20885,10.76447 0.92223,23.84308 -7.0571,28.08277 -21.30922,60.70238 -36.64699,83.87592 -44.33702,66.98799 -112.65342,110.06047 -192.73389,121.51587 -14.1893,2.02976 -47.58822,2.84254 -60.8,1.47958 z m 19.39606,-56.93418 c -2.23883,-0.80722 -4.96485,-2.27697 -6.05782,-3.26608 -5.59075,-5.05956 -7.04029,-15.85478 -2.93824,-21.88196 4.51358,-6.63182 7.01093,-7.70246 20.20845,-8.66354 29.72591,-2.16475 48.22456,-6.64206 71.61494,-17.3333 36.30066,-16.59227 70.10998,-50.40159 86.70225,-86.70225 10.69124,-23.39038 15.16855,-41.88903 17.3333,-71.61494 0.96383,-13.23511 2.01386,-15.6653 8.77247,-20.30285 7.29525,-5.00578 19.69182,-1.63378 24.18468,6.5785 1.52127,2.78066 1.7986,5.66023 1.5585,16.18257 -1.20805,52.94282 -24.19608,105.5074 -63.1983,144.50962 -38.64131,38.64131 -88.01606,60.46341 -143.44295,63.39731 -7.6144,0.40305 -11.83147,0.14464 -14.73728,-0.90308 z m -61.6256,-100.19972 c -8.77687,-3.13732 -15.96521,-12.01351 -17.38805,-21.4708 -0.42417,-2.81935 0.95749,-13.49332 4.07312,-31.46667 l 4.71504,-27.2 -20.67912,-20.79999 c -13.1193,-13.196 -21.27847,-22.24978 -22.31861,-24.76574 -2.09871,-5.07651 -2.10645,-15.45616 -0.0153,-20.46109 2.41409,-5.77775 8.56589,-12.01474 13.83566,-14.02728 2.56167,-0.97832 16.69055,-3.53306 31.39749,-5.6772 l 26.7399,-3.89844 11.81325,-23.98513 c 6.49729,-13.19182 12.99416,-25.53442 14.4375,-27.428 1.44333,-1.89359 4.88797,-4.77359 7.65476,-6.4 4.28981,-2.5217 6.20847,-2.95712 13.03052,-2.95712 6.82205,0 8.74071,0.43542 13.03052,2.95712 2.76679,1.62641 6.21143,4.50641 7.65476,6.4 1.44334,1.89358 7.94286,14.24288 14.44338,27.44288 l 11.81912,24 27.35672,3.91193 c 15.68475,2.24287 29.12317,4.70849 31.49695,5.77892 4.82825,2.17723 11.09723,8.74169 13.23552,13.85936 1.98032,4.73956 1.90491,15.53006 -0.14314,20.48405 -1.04035,2.51647 -9.19773,11.56703 -22.32164,24.76574 l -20.68214,20.79999 4.75232,27.73334 c 4.19746,24.49535 4.61186,28.3245 3.54936,32.79672 -3.04015,12.79646 -13.55669,21.06994 -26.78231,21.06994 -4.57002,0 -7.92716,-1.38277 -25.73256,-10.59898 -11.26227,-5.82944 -22.99673,-11.94944 -26.07657,-13.59999 l -5.59971,-3.00103 -4.53363,2.49675 c -2.49349,1.37321 -14.21808,7.49321 -26.05466,13.6 -19.55566,10.08925 -22.03967,11.09897 -27.2,11.05643 -3.12342,-0.0257 -7.40225,-0.66282 -9.5085,-1.41571 z m 53.20137,-54.11994 c 7.08935,-3.72796 13.6201,-4.74083 20.1904,-3.1314 2.80745,0.6877 13.98444,5.97673 24.83777,11.7534 10.85333,5.77669 19.87573,10.36358 20.04978,10.19309 0.17405,-0.17047 -1.38595,-9.96482 -3.46666,-21.76521 -2.08072,-11.8004 -3.78312,-23.76376 -3.78312,-26.58524 0,-9.07356 3.64347,-14.34502 21.92279,-31.71845 9.06247,-8.61334 16.47721,-15.99258 16.47721,-16.39828 0,-0.40571 -9.48,-2.07143 -21.06667,-3.70159 -35.5899,-5.00726 -34.87464,-4.50963 -49.84534,-34.67824 -5.85494,-11.79875 -10.90454,-21.45227 -11.22132,-21.45227 -0.31678,0 -5.36638,9.65352 -11.22132,21.45227 -14.97848,30.18428 -14.32051,29.72696 -49.84534,34.64505 -11.58667,1.60407 -21.06667,3.23904 -21.06667,3.63328 0,0.39424 7.39714,7.75629 16.4381,16.36012 18.22968,17.34828 21.9619,22.75388 21.9619,31.80873 0,2.79432 -1.68,14.71957 -3.73333,26.50055 -2.05334,11.78098 -3.73334,21.66772 -3.73334,21.97053 0,0.47119 9.15521,-4.18876 37.10516,-18.88634 z M 66.151015,288.15845 c -8.289209,-4.44556 -9.943493,-10.15625 -8.543243,-29.4918 1.595367,-22.02982 4.837199,-37.76276 11.758806,-57.06666 11.391297,-31.76957 27.637523,-57.49004 51.190452,-81.04296 33.17943,-33.179427 74.41624,-54.042042 121.11852,-61.276544 16.01928,-2.481495 35.3014,-2.646943 39.57367,-0.339554 8.20096,4.429208 11.58632,16.86274 6.5785,24.160985 -4.63755,6.758602 -7.06774,7.808642 -20.30285,8.772469 -29.72591,2.164744 -48.22456,6.642061 -71.61494,17.333294 -36.30066,16.59227 -70.10998,50.40159 -86.70225,86.70225 -10.691233,23.39038 -15.16855,41.88903 -17.333294,71.61494 -0.96109,13.19752 -2.031724,15.69487 -8.663544,20.20845 -4.418385,3.00712 -11.897871,3.19351 -17.059827,0.42513 z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default AssetIcon;
