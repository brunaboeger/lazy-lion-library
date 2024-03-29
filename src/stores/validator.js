import {
  colors,
  styles,
  sizes,
  radius,
  status,
} from './constants';

export const validateColor = (color) => colors.includes(color);
export const validateStyle = (style) => styles.includes(style);
export const validateSize = (size) => sizes.includes(size);
export const validateRadius = (borderRadius) => radius.includes(borderRadius);
export const validateStatus = (statusType) => status.includes(statusType);