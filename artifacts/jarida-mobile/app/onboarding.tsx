import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LogoMark, Wordmark } from "@/components/Brand";
import { PrimaryButton } from "@/components/ui";
import { fonts } from "@/constants/fonts";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

const { width } = Dimensions.get("window");

type MCIName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

interface Slide {
  icon: MCIName;
  title: string;
  highlight: string;
  body: string;
}

const SLIDES: Slide[] = [
  {
    icon: "doctor",
    title: "Care that revolves around",
    highlight: "you",
    body: "Find verified doctors across every specialty and consult them from anywhere, anytime.",
  },
  {
    icon: "calendar-check",
    title: "Book a visit in",
    highlight: "seconds",
    body: "No calls, no waiting rooms. Pick a doctor, choose a time, and you're set.",
  },
  {
    icon: "chat-processing",
    title: "Talk to doctors",
    highlight: "24/7",
    body: "Ask questions, share symptoms, and get professional advice through secure chat.",
  },
];

export default function Onboarding() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { completeOnboarding } = useApp();
  const [index, setIndex] = useState<number>(0);
  const listRef = useRef<FlatList<Slide>>(null);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const isLast = index === SLIDES.length - 1;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(e.nativeEvent.contentOffset.x / width);
    if (next !== index) setIndex(next);
  };

  const handleNext = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    if (isLast) {
      finish();
    } else {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
      setIndex(index + 1);
    }
  };

  const finish = () => {
    completeOnboarding();
    router.replace("/(tabs)");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.header,
          { paddingTop: topPad + 12, paddingHorizontal: 24 },
        ]}
      >
        <View style={styles.brandRow}>
          <LogoMark size={28} />
          <Wordmark size={22} />
        </View>
        {!isLast ? (
          <Pressable onPress={finish} hitSlop={10}>
            <Text style={[styles.skip, { color: colors.mutedForeground }]}>
              Skip
            </Text>
          </Pressable>
        ) : (
          <View style={{ width: 36 }} />
        )}
      </View>

      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <LinearGradient
              colors={[colors.secondary, colors.background]}
              style={styles.illustration}
            >
              <View
                style={[styles.iconWrap, { backgroundColor: colors.primary }]}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={64}
                  color={colors.primaryForeground}
                />
              </View>
            </LinearGradient>
            <View style={styles.slideText}>
              <Text style={[styles.title, { color: colors.foreground }]}>
                {item.title}{" "}
                <Text style={[styles.titleAccent, { color: colors.primary }]}>
                  {item.highlight}
                </Text>
              </Text>
              <Text style={[styles.body, { color: colors.mutedForeground }]}>
                {item.body}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={[styles.footer, { paddingBottom: bottomPad + 20 }]}>
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  width: i === index ? 24 : 8,
                  backgroundColor:
                    i === index ? colors.primary : colors.border,
                },
              ]}
            />
          ))}
        </View>
        <PrimaryButton
          label={isLast ? "Get Started" : "Continue"}
          onPress={handleNext}
          icon={isLast ? "arrow-forward" : undefined}
        />
        <View style={styles.trustRow}>
          <Ionicons
            name="shield-checkmark"
            size={14}
            color={colors.successForeground}
          />
          <Text style={[styles.trust, { color: colors.mutedForeground }]}>
            Private & encrypted health data
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  skip: { fontFamily: fonts.semibold, fontSize: 15 },
  slide: { flex: 1, alignItems: "center", justifyContent: "center" },
  illustration: {
    width: 260,
    height: 260,
    borderRadius: 130,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  iconWrap: {
    width: 130,
    height: 130,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  slideText: { paddingHorizontal: 36, alignItems: "center" },
  title: {
    fontFamily: fonts.extrabold,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 38,
  },
  titleAccent: { fontFamily: fonts.serifItalic, fontSize: 32 },
  body: {
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 16,
  },
  footer: { paddingHorizontal: 24, gap: 20 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6 },
  dot: { height: 8, borderRadius: 4 },
  trustRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  trust: { fontFamily: fonts.medium, fontSize: 13 },
});
