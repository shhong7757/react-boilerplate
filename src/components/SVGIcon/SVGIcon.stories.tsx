import React from "react";

import { Meta } from "@storybook/react";

import SVGIcon from "./SVGIcon";

export default {
  component: SVGIcon,
  title: "Components/SVGIcon",
} as Meta;

export const Primary: React.VFC<{}> = () => <SVGIcon icon="hi" />;
