import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Avatar,
  Chip,
  EmptyState,
  RatingPill,
  SPECIALTY_ICON,
} from "@/components/ui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DOCTORS, Doctor, SPECIALTIES } from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useColors } from "@/hooks/useColors";

export default function DoctorsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams<{ specialty?: string }>();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const [query, setQuery] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>(
    params.specialty ?? "all",
  );

  const filtered = useMemo<Doctor[]>(() => {
    const q = query.trim().toLowerCase();
    return DOCTORS.filter((d) => {
      const matchSpecialty =
        specialty === "all" || d.specialtyKey === specialty;
      const matchQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q);
      return matchSpecialty && matchQuery;
    });
  }, [query, specialty]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPad + 10 }]}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          Find your doctor
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          {DOCTORS.length} verified specialists online
        </Text>

        <View
          style={[
            styles.search,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Ionicons name="search" size={20} color={colors.mutedForeground} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search by name or specialty"
            placeholderTextColor={colors.mutedForeground}
            style={[styles.searchInput, { color: colors.foreground }]}
            testID="doctor-search"
          />
          {query.length > 0 ? (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons
                name="close-circle"
                size={18}
                color={colors.mutedForeground}
              />
            </Pressable>
          ) : null}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 14, paddingRight: 8 }}
        >
          {SPECIALTIES.map((s) => (
            <Chip
              key={s.key}
              label={s.label}
              active={specialty === s.key}
              onPress={() => setSpecialty(s.key)}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(d) => d.id}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 110,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={filtered.length > 0}
        ListEmptyComponent={
          <EmptyState
            icon="search"
            title="No doctors found"
            subtitle="Try a different specialty or search term to find the right doctor for you."
          />
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/doctor/${item.id}`)}
            style={({ pressed }) => [
              styles.card,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                opacity: pressed ? 0.92 : 1,
              },
            ]}
          >
            <Avatar name={item.name} size={62} online={item.online} />
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.cardName, { color: colors.foreground }]}
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <View style={styles.cardSpecRow}>
                <MaterialCommunityIcons
                  name={SPECIALTY_ICON[item.specialtyKey]}
                  size={14}
                  color={colors.primary}
                />
                <Text style={[styles.cardSpec, { color: colors.mutedForeground }]}>
                  {item.specialty}
                </Text>
              </View>
              <View style={styles.cardMeta}>
                <RatingPill rating={item.rating} reviews={item.reviews} compact />
                <Text style={[styles.dot, { color: colors.border }]}>•</Text>
                <Text style={[styles.price, { color: colors.primary }]}>
                  ${item.price}
                </Text>
              </View>
            </View>
            <View
              style={[styles.next, { backgroundColor: colors.secondary }]}
            >
              <Ionicons name="chevron-forward" size={18} color={colors.primary} />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 6 },
  title: { fontFamily: fonts.extrabold, fontSize: 26 },
  subtitle: { fontFamily: fonts.medium, fontSize: 14, marginTop: 4 },
  search: {
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  searchInput: { flex: 1, fontFamily: fonts.regular, fontSize: 15 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
  },
  cardName: { fontFamily: fonts.bold, fontSize: 16 },
  cardSpecRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 3,
  },
  cardSpec: { fontFamily: fonts.medium, fontSize: 13 },
  cardMeta: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 7 },
  dot: { fontSize: 12 },
  price: { fontFamily: fonts.bold, fontSize: 14 },
  next: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
