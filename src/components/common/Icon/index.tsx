import React from 'react';
import * as Icons from '../../../utils/icon';

interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  style?: object;
  onClick?: () => void;
}

function SvgIcon({ name, width: _width, height: _height, size, color, style, onClick }: IconProps) {
  const SelectedIcon = Icons[name];
  const width = _width ?? size;
  const height = _height ?? size;

  return (
    <div onClick={onClick}>
      <SelectedIcon style={style} width={width} height={height} color={color} />
    </div>
  );
}

export default SvgIcon;
