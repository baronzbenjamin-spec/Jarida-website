import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { SpecialtyKey } from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useColors } from "@/hooks/useColors";

type MCIName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

export const SPECIALTY_ICON: Record<SpecialtyKey, MCIName> = {
  cardiology: "heart-pulse",
  dermatology: "face-man-shimmer",
  pediatrics: "baby-face-outline",
  general: "stethoscope",
  neurology: "brain",
  psychiatry: "head-cog-outline",
  dental: "tooth-outline",
  orthopedics: "bone",
};

export function PrimaryButton({
  label,
  onPress,
  icon,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}: {
  label: string;
  onPress: () => void;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const colors = useColors();
  const isDisabled = disabled || loading;

  const bg =
    variant === "primary"
      ? colors.primary
      : variant === "secondary"
        ? colors.secondary
        : "transparent";
  const fg =
    variant === "primary" ? colors.primaryForeground : colors.primary;

  return (
    <Pressable
      onPress={() => {
        if (isDisabled) return;
        if (Platform.OS !== "web") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }
        onPress();
      }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: bg,
          borderColor: variant === "outline" ? colors.border : "transparent",
          borderWidth: variant === "outline" ? 1.5 : 0,
          opacity: isDisabled ? 0.5 : pressed ? 0.9 : 1,
          transform: [{ scale: pressed && !isDisabled ? 0.98 : 1 }],
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={fg} />
      ) : (
        <>
          {icon ? <Ionicons name={icon} size={18} color={fg} /> : null}
          <Text style={[styles.buttonLabel, { color: fg }]}>{label}</Text>
        </>
      )}
    </Pressable>
  );
}

export function IconButton({
  name,
  onPress,
  size = 22,
  color,
  background,
  testID,
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
  size?: number;
  color?: string;
  background?: string;
  testID?: string;
}) {
  const colors = useColors();
  return (
    <Pressable
      onPress={() => {
        if (Platform.OS !== "web") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress();
      }}
      testID={testID}
      style={({ pressed }) => [
        styles.iconButton,
        {
          backgroundColor: background ?? "transparent",
          opacity: pressed ? 0.6 : 1,
        },
      ]}
      hitSlop={8}
    >
      <Ionicons name={name} size={size} color={color ?? colors.foreground} />
    </Pressable>
  );
}

export function Avatar({
  name,
  size = 52,
  online,
}: {
  name: string;
  size?: number;
  online?: boolean;
}) {
  const colors = useColors();
  const initials = name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.secondary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: fonts.bold,
          fontSize: size * 0.36,
          color: colors.primary,
        }}
      >
        {initials}
      </Text>
      {online ? (
        <View
          style={[
            styles.onlineDot,
            {
              backgroundColor: colors.successForeground,
              borderColor: colors.card,
              width: size * 0.26,
              height: size * 0.26,
              borderRadius: size * 0.13,
            },
          ]}
        />
      ) : null}
    </View>
  );
}

export function RatingPill({
  rating,
  reviews,
  compact = false,
}: {
  rating: number;
  reviews?: number;
  compact?: boolean;
}) {
  const colors = useColors();
  return (
    <View style={styles.ratingRow}>
      <Ionicons name="star" size={compact ? 12 : 14} color={colors.star} />
      <Text
        style={{
          fontFamily: fonts.bold,
          fontSize: compact ? 12 : 13,
          color: colors.foreground,
        }}
      >
        {rating.toFixed(1)}
      </Text>
      {reviews != null ? (
        <Text
          style={{
            fontFamily: fonts.medium,
            fontSize: compact ? 11 : 12,
            color: colors.mutedForeground,
          }}
        >
          ({reviews})
        </Text>
      ) : null}
    </View>
  );
}

export function SpecialtyBadge({ specialtyKey }: { specialtyKey: SpecialtyKey }) {
  const colors = useColors();
  return (
    <View
      style={{
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: colors.secondary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name={SPECIALTY_ICON[specialtyKey]}
        size={22}
        color={colors.primary}
      />
    </View>
  );
}

export function EmptyState({
  icon,
  title,
  subtitle,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  subtitle: string;
}) {
  const colors = useColors();
  return (
    <View style={styles.empty}>
      <View
        style={[styles.emptyIcon, { backgroundColor: colors.secondary }]}
      >
        <Ionicons name={icon} size={30} color={colors.primary} />
      </View>
      <Text
        style={{
          fontFamily: fonts.bold,
          fontSize: 17,
          color: colors.foreground,
          marginBottom: 6,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular,
          fontSize: 14,
          color: colors.mutedForeground,
          textAlign: "center",
          lineHeight: 20,
          maxWidth: 260,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}

export function SectionHeader({
  title,
  actionLabel,
  onAction,
  style,
}: {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  const colors = useColors();
  return (
    <View style={[styles.sectionHeader, style]}>
      <Text
        style={{ fontFamily: fonts.bold, fontSize: 19, color: colors.foreground }}
      >
        {title}
      </Text>
      {actionLabel && onAction ? (
        <Pressable onPress={onAction} hitSlop={8}>
          <Text
            style={{
              fontFamily: fonts.semibold,
              fontSize: 14,
              color: colors.primary,
            }}
          >
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export function Chip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  const colors = useColors();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        {
          backgroundColor: active ? colors.primary : colors.card,
          borderColor: active ? colors.primary : colors.border,
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      <Text
        style={{
          fontFamily: fonts.semibold,
          fontSize: 13.5,
          color: active ? colors.primaryForeground : colors.mutedForeground,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const textStyle = (style?: StyleProp<TextStyle>) => style;
export { textStyle };

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 24,
  },
  buttonLabel: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  onlineDot: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderWidth: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
});
