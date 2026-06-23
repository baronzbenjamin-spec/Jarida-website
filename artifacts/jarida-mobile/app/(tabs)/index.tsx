import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LogoMark } from "@/components/Brand";
import {
  Avatar,
  IconButton,
  RatingPill,
  SectionHeader,
  SpecialtyBadge,
} from "@/components/ui";
import {
  DOCTORS,
  SPECIALTIES,
  formatDateLabel,
  getDoctor,
} from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { appointments } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const topDoctors = DOCTORS.slice(0, 5);
  const upcoming = appointments
    .filter((a) => a.status === "upcoming")
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  const upcomingDoctor = upcoming ? getDoctor(upcoming.doctorId) : undefined;

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: 110 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={[styles.header, { paddingTop: topPad + 10 }]}>
        <View style={styles.headerLeft}>
          <LogoMark size={26} />
          <View>
            <Text style={[styles.greeting, { color: colors.mutedForeground }]}>
              {greeting()}
            </Text>
            <Text style={[styles.name, { color: colors.foreground }]}>
              Welcome back
            </Text>
          </View>
        </View>
        <IconButton
          name="notifications-outline"
          onPress={() => {}}
          background={colors.card}
        />
      </View>

      {/* Search */}
      <Pressable
        onPress={() => router.push("/(tabs)/doctors")}
        style={[
          styles.search,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Ionicons name="search" size={20} color={colors.mutedForeground} />
        <Text style={[styles.searchText, { color: colors.mutedForeground }]}>
          Search doctors, specialties...
        </Text>
      </Pressable>

      {/* Promo card */}
      <LinearGradient
        colors={["#2F3A63", colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.promo}
      >
        <View style={styles.promoText}>
          <View style={styles.promoBadge}>
            <View
              style={[styles.liveDot, { backgroundColor: colors.successForeground }]}
            />
            <Text style={styles.promoBadgeText}>Available 24/7</Text>
          </View>
          <Text style={styles.promoTitle}>
            Talk to a doctor anytime, anywhere
          </Text>
          <Pressable
            onPress={() => router.push("/(tabs)/doctors")}
            style={({ pressed }) => [
              styles.promoBtn,
              { opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <Text style={[styles.promoBtnText, { color: colors.primary }]}>
              Start a consult
            </Text>
            <Ionicons name="arrow-forward" size={16} color={colors.primary} />
          </Pressable>
        </View>
        <View style={styles.promoIcon}>
          <Ionicons name="medkit" size={56} color="rgba(255,255,255,0.18)" />
        </View>
      </LinearGradient>

      {/* Upcoming appointment */}
      {upcoming && upcomingDoctor ? (
        <View style={styles.section}>
          <SectionHeader
            title="Upcoming visit"
            actionLabel="See all"
            onAction={() => router.push("/(tabs)/appointments")}
          />
          <Pressable
            onPress={() => router.push(`/doctor/${upcomingDoctor.id}`)}
            style={[
              styles.upcomingCard,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Avatar name={upcomingDoctor.name} size={48} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.upName, { color: colors.foreground }]}>
                {upcomingDoctor.name}
              </Text>
              <Text style={[styles.upSpec, { color: colors.mutedForeground }]}>
                {upcomingDoctor.specialty}
              </Text>
            </View>
            <View
              style={[styles.upTime, { backgroundColor: colors.secondary }]}
            >
              <Text style={[styles.upTimeDay, { color: colors.primary }]}>
                {formatDateLabel(upcoming.date)}
              </Text>
              <Text style={[styles.upTimeHour, { color: colors.primary }]}>
                {upcoming.time}
              </Text>
            </View>
          </Pressable>
        </View>
      ) : null}

      {/* Specialties */}
      <View style={styles.section}>
        <SectionHeader title="Specialties" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 18, paddingTop: 14, paddingRight: 8 }}
        >
          {SPECIALTIES.filter((s) => s.key !== "all").map((s) => (
            <Pressable
              key={s.key}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/doctors",
                  params: { specialty: s.key },
                })
              }
              style={styles.specialtyItem}
            >
              <SpecialtyBadge specialtyKey={s.key as never} />
              <Text style={[styles.specialtyLabel, { color: colors.foreground }]}>
                {s.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Top doctors */}
      <View style={styles.section}>
        <SectionHeader
          title="Top doctors"
          actionLabel="See all"
          onAction={() => router.push("/(tabs)/doctors")}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 14, paddingTop: 14, paddingRight: 8 }}
        >
          {topDoctors.map((d) => (
            <Pressable
              key={d.id}
              onPress={() => router.push(`/doctor/${d.id}`)}
              style={[
                styles.docCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View style={styles.docCardTop}>
                <Avatar name={d.name} size={56} online={d.online} />
                <RatingPill rating={d.rating} compact />
              </View>
              <Text
                style={[styles.docName, { color: colors.foreground }]}
                numberOfLines={1}
              >
                {d.name}
              </Text>
              <Text style={[styles.docSpec, { color: colors.mutedForeground }]}>
                {d.specialty}
              </Text>
              <View style={[styles.docPriceRow, { borderTopColor: colors.border }]}>
                <Text style={[styles.docPrice, { color: colors.primary }]}>
                  ${d.price}
                  <Text style={{ color: colors.mutedForeground, fontSize: 12 }}>
                    {" "}
                    /visit
                  </Text>
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.mutedForeground}
                />
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  greeting: { fontFamily: fonts.medium, fontSize: 13 },
  name: { fontFamily: fonts.bold, fontSize: 18 },
  search: {
    marginHorizontal: 20,
    marginTop: 8,
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
  },
  searchText: { fontFamily: fonts.regular, fontSize: 15 },
  promo: {
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 24,
    padding: 22,
    flexDirection: "row",
    overflow: "hidden",
  },
  promoText: { flex: 1, gap: 12 },
  promoBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  liveDot: { width: 7, height: 7, borderRadius: 4 },
  promoBadgeText: {
    color: "#FFFFFF",
    fontFamily: fonts.semibold,
    fontSize: 12,
  },
  promoTitle: {
    color: "#FFFFFF",
    fontFamily: fonts.bold,
    fontSize: 21,
    lineHeight: 27,
    maxWidth: 200,
  },
  promoBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 4,
  },
  promoBtnText: { fontFamily: fonts.bold, fontSize: 14 },
  promoIcon: { justifyContent: "flex-end" },
  section: { marginTop: 26, paddingHorizontal: 20 },
  upcomingCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 14,
  },
  upName: { fontFamily: fonts.bold, fontSize: 15 },
  upSpec: { fontFamily: fonts.medium, fontSize: 13, marginTop: 2 },
  upTime: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  upTimeDay: { fontFamily: fonts.semibold, fontSize: 12 },
  upTimeHour: { fontFamily: fonts.bold, fontSize: 13, marginTop: 1 },
  specialtyItem: { alignItems: "center", gap: 8, width: 64 },
  specialtyLabel: { fontFamily: fonts.medium, fontSize: 12, textAlign: "center" },
  docCard: {
    width: 168,
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
  },
  docCardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  docName: { fontFamily: fonts.bold, fontSize: 15 },
  docSpec: { fontFamily: fonts.medium, fontSize: 12.5, marginTop: 2 },
  docPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    marginTop: 12,
    paddingTop: 10,
  },
  docPrice: { fontFamily: fonts.bold, fontSize: 16 },
});
