import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Avatar, EmptyState } from "@/components/ui";
import { Conversation, getDoctor } from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

export default function MessagesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { conversations } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const withDoctor = conversations.filter((c) => getDoctor(c.doctorId));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPad + 10 }]}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          Messages
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Chat securely with your care team
        </Text>
      </View>

      <FlatList
        data={withDoctor}
        keyExtractor={(c) => c.doctorId}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 110,
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={withDoctor.length > 0}
        ItemSeparatorComponent={() => (
          <View style={[styles.sep, { backgroundColor: colors.border }]} />
        )}
        ListEmptyComponent={
          <EmptyState
            icon="chatbubbles-outline"
            title="No conversations yet"
            subtitle="Book a visit or message a doctor to start a secure conversation."
          />
        }
        renderItem={({ item }: { item: Conversation }) => {
          const doctor = getDoctor(item.doctorId);
          if (!doctor) return null;
          const last = item.messages[item.messages.length - 1];
          return (
            <Pressable
              onPress={() => router.push(`/chat/${doctor.id}`)}
              style={({ pressed }) => [
                styles.row,
                { opacity: pressed ? 0.7 : 1 },
              ]}
            >
              <Avatar name={doctor.name} size={56} online={doctor.online} />
              <View style={{ flex: 1 }}>
                <View style={styles.rowTop}>
                  <Text
                    style={[styles.name, { color: colors.foreground }]}
                    numberOfLines={1}
                  >
                    {doctor.name}
                  </Text>
                  {last ? (
                    <Text style={[styles.time, { color: colors.mutedForeground }]}>
                      {last.time}
                    </Text>
                  ) : null}
                </View>
                <Text
                  style={[styles.preview, { color: colors.mutedForeground }]}
                  numberOfLines={1}
                >
                  {last
                    ? `${last.sender === "me" ? "You: " : ""}${last.text}`
                    : "Start the conversation"}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 6 },
  title: { fontFamily: fonts.extrabold, fontSize: 26 },
  subtitle: { fontFamily: fonts.medium, fontSize: 14, marginTop: 4 },
  row: { flexDirection: "row", alignItems: "center", gap: 14, paddingVertical: 14 },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: { fontFamily: fonts.bold, fontSize: 16, flex: 1 },
  time: { fontFamily: fonts.medium, fontSize: 12 },
  preview: { fontFamily: fonts.regular, fontSize: 14, marginTop: 3 },
  sep: { height: 1, marginLeft: 70 },
});
