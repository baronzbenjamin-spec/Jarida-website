import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import React, { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Avatar, EmptyState } from "@/components/ui";
import { Appointment, formatDateLabel, getDoctor } from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

type Tab = "upcoming" | "history";

export default function AppointmentsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { appointments, cancelAppointment } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const [tab, setTab] = useState<Tab>("upcoming");

  const data = useMemo<Appointment[]>(() => {
    if (tab === "upcoming") {
      return appointments
        .filter((a) => a.status === "upcoming")
        .sort((a, b) => a.date.localeCompare(b.date));
    }
    return appointments
      .filter((a) => a.status !== "upcoming")
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [appointments, tab]);

  const confirmCancel = (id: string) => {
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }
    Alert.alert(
      "Cancel appointment?",
      "This will release your reserved time slot.",
      [
        { text: "Keep it", style: "cancel" },
        {
          text: "Cancel visit",
          style: "destructive",
          onPress: () => cancelAppointment(id),
        },
      ],
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPad + 10 }]}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          Appointments
        </Text>

        <View style={[styles.segment, { backgroundColor: colors.muted }]}>
          {(["upcoming", "history"] as Tab[]).map((t) => (
            <Pressable
              key={t}
              onPress={() => setTab(t)}
              style={[
                styles.segmentBtn,
                tab === t && {
                  backgroundColor: colors.card,
                  shadowColor: "#000",
                  shadowOpacity: 0.06,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 2 },
                  elevation: 2,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: fonts.semibold,
                  fontSize: 14,
                  color: tab === t ? colors.primary : colors.mutedForeground,
                }}
              >
                {t === "upcoming" ? "Upcoming" : "History"}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(a) => a.id}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 110,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={data.length > 0}
        ListEmptyComponent={
          <EmptyState
            icon={tab === "upcoming" ? "calendar-outline" : "time-outline"}
            title={
              tab === "upcoming" ? "No upcoming visits" : "No past visits yet"
            }
            subtitle={
              tab === "upcoming"
                ? "Book an appointment with a doctor and it will show up here."
                : "Your completed and cancelled appointments will appear here."
            }
          />
        }
        renderItem={({ item }) => {
          const doctor = getDoctor(item.doctorId);
          if (!doctor) return null;
          const cancelled = item.status === "cancelled";
          const completed = item.status === "completed";
          return (
            <View
              style={[
                styles.card,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View style={styles.cardTop}>
                <Avatar name={doctor.name} size={48} />
                <View style={{ flex: 1 }}>
                  <Text style={[styles.docName, { color: colors.foreground }]}>
                    {doctor.name}
                  </Text>
                  <Text style={[styles.docSpec, { color: colors.mutedForeground }]}>
                    {doctor.specialty}
                  </Text>
                </View>
                <StatusTag status={item.status} />
              </View>

              <View style={[styles.timeRow, { borderTopColor: colors.border }]}>
                <View style={styles.timeItem}>
                  <Ionicons
                    name="calendar-outline"
                    size={15}
                    color={colors.primary}
                  />
                  <Text style={[styles.timeText, { color: colors.foreground }]}>
                    {formatDateLabel(item.date)}
                  </Text>
                </View>
                <View style={styles.timeItem}>
                  <Ionicons
                    name="time-outline"
                    size={15}
                    color={colors.primary}
                  />
                  <Text style={[styles.timeText, { color: colors.foreground }]}>
                    {item.time}
                  </Text>
                </View>
              </View>

              {!cancelled && !completed ? (
                <View style={styles.actions}>
                  <Pressable
                    onPress={() => router.push(`/chat/${doctor.id}`)}
                    style={[
                      styles.actionBtn,
                      { backgroundColor: colors.secondary },
                    ]}
                  >
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={16}
                      color={colors.primary}
                    />
                    <Text style={[styles.actionText, { color: colors.primary }]}>
                      Message
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => confirmCancel(item.id)}
                    style={[
                      styles.actionBtn,
                      { backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border },
                    ]}
                  >
                    <Ionicons
                      name="close"
                      size={16}
                      color={colors.destructive}
                    />
                    <Text style={[styles.actionText, { color: colors.destructive }]}>
                      Cancel
                    </Text>
                  </Pressable>
                </View>
              ) : completed ? (
                <Pressable
                  onPress={() => router.push(`/doctor/${doctor.id}`)}
                  style={[
                    styles.rebook,
                    { backgroundColor: colors.secondary },
                  ]}
                >
                  <Ionicons name="refresh" size={16} color={colors.primary} />
                  <Text style={[styles.actionText, { color: colors.primary }]}>
                    Book again
                  </Text>
                </Pressable>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
}

function StatusTag({ status }: { status: Appointment["status"] }) {
  const colors = useColors();
  const map = {
    upcoming: { bg: colors.secondary, fg: colors.primary, label: "Upcoming" },
    completed: {
      bg: colors.success,
      fg: colors.successForeground,
      label: "Completed",
    },
    cancelled: {
      bg: "#FBE9E9",
      fg: colors.destructive,
      label: "Cancelled",
    },
  } as const;
  const s = map[status];
  return (
    <View style={[styles.tag, { backgroundColor: s.bg }]}>
      <Text style={[styles.tagText, { color: s.fg }]}>{s.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 6 },
  title: { fontFamily: fonts.extrabold, fontSize: 26 },
  segment: {
    flexDirection: "row",
    borderRadius: 14,
    padding: 4,
    marginTop: 16,
  },
  segmentBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 9,
    borderRadius: 11,
  },
  card: { borderRadius: 20, borderWidth: 1, padding: 16 },
  cardTop: { flexDirection: "row", alignItems: "center", gap: 12 },
  docName: { fontFamily: fonts.bold, fontSize: 15 },
  docSpec: { fontFamily: fonts.medium, fontSize: 13, marginTop: 2 },
  tag: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 },
  tagText: { fontFamily: fonts.semibold, fontSize: 11.5 },
  timeRow: {
    flexDirection: "row",
    gap: 20,
    borderTopWidth: 1,
    marginTop: 14,
    paddingTop: 14,
  },
  timeItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  timeText: { fontFamily: fonts.semibold, fontSize: 13.5 },
  actions: { flexDirection: "row", gap: 10, marginTop: 14 },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    borderRadius: 12,
  },
  rebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    borderRadius: 12,
    marginTop: 14,
  },
  actionText: { fontFamily: fonts.semibold, fontSize: 13.5 },
});
