import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import React, { useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Avatar, IconButton, PrimaryButton } from "@/components/ui";
import {
  TIME_SLOTS,
  formatDateLabel,
  getDoctor,
} from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

const dayMs = 24 * 60 * 60 * 1000;

export default function BookScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const doctor = getDoctor(id);
  const { bookAppointment } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const dates = useMemo(() => {
    const now = Date.now();
    return Array.from({ length: 14 }, (_, i) =>
      new Date(now + i * dayMs).toISOString().slice(0, 10),
    );
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(dates[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState<string>("");
  const [booked, setBooked] = useState<boolean>(false);

  if (!doctor) {
    return (
      <View style={[styles.missing, { backgroundColor: colors.background }]}>
        <Text style={{ fontFamily: fonts.semibold, color: colors.foreground }}>
          Doctor not found.
        </Text>
      </View>
    );
  }

  const confirm = () => {
    if (!selectedTime) return;
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    bookAppointment({
      doctorId: doctor.id,
      date: selectedDate,
      time: selectedTime,
      reason: reason.trim() || undefined,
    });
    setBooked(true);
  };

  if (booked) {
    return (
      <View style={[styles.success, { backgroundColor: colors.background, paddingTop: topPad }]}>
        <View style={[styles.successIcon, { backgroundColor: colors.success }]}>
          <Ionicons name="checkmark" size={52} color={colors.successForeground} />
        </View>
        <Text style={[styles.successTitle, { color: colors.foreground }]}>
          You're all set!
        </Text>
        <Text style={[styles.successBody, { color: colors.mutedForeground }]}>
          Your appointment with {doctor.name} is confirmed for{" "}
          {formatDateLabel(selectedDate)} at {selectedTime}.
        </Text>
        <View style={{ height: 28 }} />
        <PrimaryButton
          label="View appointments"
          onPress={() => router.replace("/(tabs)/appointments")}
          icon="calendar"
          style={{ alignSelf: "stretch" }}
        />
        <Pressable onPress={() => router.replace("/(tabs)")} style={{ marginTop: 14 }}>
          <Text style={{ fontFamily: fonts.semibold, color: colors.primary, fontSize: 15 }}>
            Back to home
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={[styles.header, { paddingTop: topPad + 6, borderBottomColor: colors.border }]}>
        <IconButton
          name="chevron-back"
          onPress={() => router.back()}
          background={colors.card}
        />
        <Text style={[styles.headerTitle, { color: colors.foreground }]}>
          Book appointment
        </Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Doctor summary */}
        <View style={[styles.docRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Avatar name={doctor.name} size={52} online={doctor.online} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.docName, { color: colors.foreground }]}>
              {doctor.name}
            </Text>
            <Text style={[styles.docSpec, { color: colors.mutedForeground }]}>
              {doctor.specialty}
            </Text>
          </View>
          <Text style={[styles.docPrice, { color: colors.primary }]}>
            ${doctor.price}
          </Text>
        </View>

        {/* Date */}
        <Text style={[styles.label, { color: colors.foreground }]}>
          Select date
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
        >
          {dates.map((d) => {
            const date = new Date(d + "T00:00:00");
            const active = d === selectedDate;
            return (
              <Pressable
                key={d}
                onPress={() => setSelectedDate(d)}
                style={[
                  styles.dateChip,
                  {
                    backgroundColor: active ? colors.primary : colors.card,
                    borderColor: active ? colors.primary : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.dateWeekday,
                    { color: active ? "rgba(255,255,255,0.7)" : colors.mutedForeground },
                  ]}
                >
                  {date.toLocaleDateString(undefined, { weekday: "short" })}
                </Text>
                <Text
                  style={[
                    styles.dateNum,
                    { color: active ? colors.primaryForeground : colors.foreground },
                  ]}
                >
                  {date.getDate()}
                </Text>
                <Text
                  style={[
                    styles.dateMonth,
                    { color: active ? "rgba(255,255,255,0.7)" : colors.mutedForeground },
                  ]}
                >
                  {date.toLocaleDateString(undefined, { month: "short" })}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Time */}
        <Text style={[styles.label, { color: colors.foreground }]}>
          Available times
        </Text>
        <View style={styles.timeGrid}>
          {TIME_SLOTS.map((t) => {
            const active = t === selectedTime;
            return (
              <Pressable
                key={t}
                onPress={() => {
                  if (Platform.OS !== "web") {
                    Haptics.selectionAsync();
                  }
                  setSelectedTime(t);
                }}
                style={[
                  styles.timeChip,
                  {
                    backgroundColor: active ? colors.primary : colors.card,
                    borderColor: active ? colors.primary : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.timeText,
                    { color: active ? colors.primaryForeground : colors.foreground },
                  ]}
                >
                  {t}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Reason */}
        <Text style={[styles.label, { color: colors.foreground }]}>
          Reason for visit{" "}
          <Text style={{ color: colors.mutedForeground, fontFamily: fonts.regular }}>
            (optional)
          </Text>
        </Text>
        <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            value={reason}
            onChangeText={setReason}
            placeholder="Describe your symptoms or concern..."
            placeholderTextColor={colors.mutedForeground}
            multiline
            style={[
              styles.reasonInput,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                color: colors.foreground,
              },
            ]}
          />
        </View>
      </ScrollView>

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
        <PrimaryButton
          label={
            selectedTime
              ? `Confirm for ${formatDateLabel(selectedDate)}, ${selectedTime}`
              : "Select a time slot"
          }
          onPress={confirm}
          disabled={!selectedTime}
          icon="checkmark-circle"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  missing: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  headerTitle: { fontFamily: fonts.bold, fontSize: 17 },
  docRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    margin: 20,
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
  },
  docName: { fontFamily: fonts.bold, fontSize: 15 },
  docSpec: { fontFamily: fonts.medium, fontSize: 13, marginTop: 2 },
  docPrice: { fontFamily: fonts.extrabold, fontSize: 18 },
  label: {
    fontFamily: fonts.bold,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 14,
  },
  dateChip: {
    width: 64,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    gap: 4,
  },
  dateWeekday: { fontFamily: fonts.medium, fontSize: 12 },
  dateNum: { fontFamily: fonts.extrabold, fontSize: 20 },
  dateMonth: { fontFamily: fonts.medium, fontSize: 11 },
  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  timeChip: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  timeText: { fontFamily: fonts.semibold, fontSize: 14 },
  reasonInput: {
    minHeight: 100,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    fontFamily: fonts.regular,
    fontSize: 15,
    textAlignVertical: "top",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 14,
    borderTopWidth: 1,
  },
  success: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  successIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  successTitle: { fontFamily: fonts.extrabold, fontSize: 26, marginBottom: 10 },
  successBody: {
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});
