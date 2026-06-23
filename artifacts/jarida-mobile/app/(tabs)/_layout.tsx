import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";

import { fonts } from "@/constants/fonts";
import { useColors } from "@/hooks/useColors";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const TABS: {
  name: string;
  title: string;
  ionicon: IoniconName;
  sf: string;
  sfSelected: string;
}[] = [
  { name: "index", title: "Home", ionicon: "home", sf: "house", sfSelected: "house.fill" },
  {
    name: "doctors",
    title: "Doctors",
    ionicon: "medkit",
    sf: "stethoscope",
    sfSelected: "stethoscope",
  },
  {
    name: "appointments",
    title: "Visits",
    ionicon: "calendar",
    sf: "calendar",
    sfSelected: "calendar",
  },
  {
    name: "messages",
    title: "Messages",
    ionicon: "chatbubbles",
    sf: "message",
    sfSelected: "message.fill",
  },
];

function NativeTabLayout() {
  return (
    <NativeTabs>
      {TABS.map((t) => (
        <NativeTabs.Trigger key={t.name} name={t.name}>
          <Icon
            sf={{ default: t.sf, selected: t.sfSelected } as never}
          />
          <Label>{t.title}</Label>
        </NativeTabs.Trigger>
      ))}
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarLabelStyle: { fontFamily: fonts.semibold, fontSize: 11 },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.card,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={100}
              tint={isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
          ) : (
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: colors.card },
              ]}
            />
          ),
      }}
    >
      {TABS.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            tabBarIcon: ({ color, focused }) =>
              isIOS ? (
                <SymbolView
                  name={(focused ? t.sfSelected : t.sf) as never}
                  tintColor={color}
                  size={24}
                />
              ) : (
                <Ionicons
                  name={
                    focused
                      ? t.ionicon
                      : ((`${t.ionicon}-outline` as IoniconName))
                  }
                  size={23}
                  color={color}
                />
              ),
          }}
        />
      ))}
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
