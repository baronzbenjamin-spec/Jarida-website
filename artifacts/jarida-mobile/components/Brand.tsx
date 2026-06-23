import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

import { fonts } from "@/constants/fonts";
import { useColors } from "@/hooks/useColors";

/**
 * The Jarida logo mark — four rounded tiles and a dot forming the brand's
 * abstract figure, recreated as vector so it stays crisp at any size and can
 * be tinted to match the surface it sits on.
 */
export function LogoMark({
  size = 40,
  color,
}: {
  size?: number;
  color?: string;
}) {
  const colors = useColors();
  const c = color ?? colors.primary;
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Rect x={6} y={4} width={42} height={46} rx={12} fill={c} />
      <Circle cx={67} cy={33} r={9} fill={c} />
      <Rect x={6} y={56} width={42} height={40} rx={12} fill={c} />
      <Rect x={54} y={56} width={42} height={40} rx={12} fill={c} />
    </Svg>
  );
}

export function Wordmark({
  size = 26,
  color,
  style,
}: {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}) {
  const colors = useColors();
  return (
    <Text
      style={[
        {
          fontFamily: fonts.serif,
          fontSize: size,
          color: color ?? colors.primary,
          letterSpacing: 0.2,
        },
        style,
      ]}
    >
      Jarida
    </Text>
  );
}
