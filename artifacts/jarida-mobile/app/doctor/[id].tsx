import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Avatar,
  IconButton,
  PrimaryButton,
  RatingPill,
  SPECIALTY_ICON,
} from "@/components/ui";
import { getDoctor } from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useColors } from "@/hooks/useColors";

export default function DoctorDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const doctor = getDoctor(id);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  if (!doctor) {
    return (
      <View style={[styles.missing, { backgroundColor: colors.background }]}>
        <Text style={{ fontFamily: fonts.semibold, color: colors.foreground }}>
          Doctor not found.
        </Text>
      </View>
    );
  }

  const stats = [
    { icon: "people-outline" as const, value: doctor.patients, label: "Patients" },
    {
      icon: "ribbon-outline" as const,
      value: `${doctor.experience} yrs`,
      label: "Experience",
    },
    {
      icon: "star-outline" as const,
      value: doctor.rating.toFixed(1),
      label: `${doctor.reviews} reviews`,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Floating header */}
      <View style={[styles.topBar, { paddingTop: topPad + 6 }]}>
        <IconButton
          name="chevron-back"
          onPress={() => router.back()}
          background={colors.card}
        />
        <IconButton
          name="heart-outline"
          onPress={() => {}}
          background={colors.card}
        />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={[styles.hero, { paddingTop: topPad + 56 }]}>
          <Avatar name={doctor.name} size={104} online={doctor.online} />
          <Text style={[styles.name, { color: colors.foreground }]}>
            {doctor.name}
          </Text>
          <View style={styles.specRow}>
            <MaterialCommunityIcons
              name={SPECIALTY_ICON[doctor.specialtyKey]}
              size={16}
              color={colors.primary}
            />
            <Text style={[styles.spec, { color: colors.mutedForeground }]}>
              {doctor.specialty}
            </Text>
          </View>
          <View style={styles.hospitalRow}>
            <Ionicons
              name="business-outline"
              size={14}
              color={colors.mutedForeground}
            />
            <Text style={[styles.hospital, { color: colors.mutedForeground }]}>
              {doctor.hospital}
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={[styles.stats, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <View style={styles.statItem}>
                <Ionicons name={s.icon} size={18} color={colors.primary} />
                <Text style={[styles.statValue, { color: colors.foreground }]}>
                  {s.value}
                </Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
                  {s.label}
                </Text>
              </View>
              {i < stats.length - 1 ? (
                <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
              ) : null}
            </React.Fragment>
          ))}
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            About
          </Text>
          <Text style={[styles.about, { color: colors.mutedForeground }]}>
            {doctor.about}
          </Text>
        </View>

        {/* Availability */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            Availability
          </Text>
          <View
            style={[
              styles.availCard,
              { backgroundColor: colors.secondary },
            ]}
          >
            <View style={[styles.availIcon, { backgroundColor: colors.card }]}>
              <Ionicons name="time" size={20} color={colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.availLabel, { color: colors.mutedForeground }]}>
                Next available
              </Text>
              <Text style={[styles.availValue, { color: colors.foreground }]}>
                {doctor.nextAvailable}
              </Text>
            </View>
            <View style={styles.onlineTag}>
              <View
                style={[
                  styles.onlinePulse,
                  { backgroundColor: doctor.online ? colors.successForeground : colors.mutedForeground },
                ]}
              />
              <Text
                style={[
                  styles.onlineTagText,
                  { color: doctor.online ? colors.successForeground : colors.mutedForeground },
                ]}
              >
                {doctor.online ? "Online" : "Offline"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom bar */}
      <View
        style={[
          styles.bottomBar,
          {
            backgroundColor: colors.card,
            borderTopColor: colors.border,
            paddingBottom: bottomPad + 14,
          },
        ]}
      >
        <View>
          <Text style={[styles.priceLabel, { color: colors.mutedForeground }]}>
            Consultation
          </Text>
          <Text style={[styles.price, { color: colors.foreground }]}>
            ${doctor.price}
            <Text style={{ color: colors.mutedForeground, fontSize: 13 }}>
              {" "}
              /visit
            </Text>
          </Text>
        </View>
        <PrimaryButton
          label="Book Appointment"
          onPress={() => router.push(`/book/${doctor.id}`)}
          icon="calendar"
          style={{ flex: 1, marginLeft: 16 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  missing: { flex: 1, alignItems: "center", justifyContent: "center" },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  hero: { alignItems: "center", paddingHorizontal: 24 },
  name: { fontFamily: fonts.extrabold, fontSize: 23, marginTop: 14 },
  specRow: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 6 },
  spec: { fontFamily: fonts.semibold, fontSize: 15 },
  hospitalRow: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 8 },
  hospital: { fontFamily: fonts.medium, fontSize: 13.5 },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 22,
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 18,
  },
  statItem: { flex: 1, alignItems: "center", gap: 4 },
  statValue: { fontFamily: fonts.bold, fontSize: 17 },
  statLabel: { fontFamily: fonts.medium, fontSize: 12 },
  statDivider: { width: 1, height: 40 },
  section: { paddingHorizontal: 20, marginTop: 26 },
  sectionTitle: { fontFamily: fonts.bold, fontSize: 18, marginBottom: 10 },
  about: { fontFamily: fonts.regular, fontSize: 15, lineHeight: 23 },
  availCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderRadius: 18,
  },
  availIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  availLabel: { fontFamily: fonts.medium, fontSize: 12.5 },
  availValue: { fontFamily: fonts.bold, fontSize: 15, marginTop: 2 },
  onlineTag: { flexDirection: "row", alignItems: "center", gap: 5 },
  onlinePulse: { width: 8, height: 8, borderRadius: 4 },
  onlineTagText: { fontFamily: fonts.semibold, fontSize: 13 },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 14,
    borderTopWidth: 1,
  },
  priceLabel: { fontFamily: fonts.medium, fontSize: 12 },
  price: { fontFamily: fonts.extrabold, fontSize: 22, marginTop: 2 },
});
