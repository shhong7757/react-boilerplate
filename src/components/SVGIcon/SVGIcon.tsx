import React from 'react';
import * as svg from 'assets/svg';

export type SVGIconType = keyof typeof svg;

export type SVGIconProps = {
  icon: SVGIconType;
};

function SVGIcon({
  icon,
  ...props
}: SVGIconProps & React.SVGProps<SVGSVGElement>): JSX.Element {
  const SVG = svg[icon];

  return <SVG {...props} />;
}

export default SVGIcon;
