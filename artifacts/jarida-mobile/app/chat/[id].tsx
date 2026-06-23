import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Avatar } from "@/components/ui";
import { ChatMessage, getDoctor } from "@/constants/data";
import { fonts } from "@/constants/fonts";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

export default function ChatScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const doctor = getDoctor(id);
  const { getConversation, sendMessage } = useApp();
  const [text, setText] = useState<string>("");

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 16 : insets.bottom;

  const conversation = getConversation(id ?? "");
  const reversed = useMemo<ChatMessage[]>(
    () => [...(conversation?.messages ?? [])].reverse(),
    [conversation],
  );

  if (!doctor) {
    return (
      <View style={[styles.missing, { backgroundColor: colors.background }]}>
        <Text style={{ fontFamily: fonts.semibold, color: colors.foreground }}>
          Conversation not found.
        </Text>
      </View>
    );
  }

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(doctor.id, text);
    setText("");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            paddingTop: topPad + 6,
            backgroundColor: colors.card,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={26} color={colors.foreground} />
        </Pressable>
        <Pressable
          onPress={() => router.push(`/doctor/${doctor.id}`)}
          style={styles.headerDoctor}
        >
          <Avatar name={doctor.name} size={40} online={doctor.online} />
          <View>
            <Text style={[styles.headerName, { color: colors.foreground }]}>
              {doctor.name}
            </Text>
            <Text
              style={[
                styles.headerStatus,
                { color: doctor.online ? colors.successForeground : colors.mutedForeground },
              ]}
            >
              {doctor.online ? "Online now" : "Offline"}
            </Text>
          </View>
        </Pressable>
        <Ionicons name="call-outline" size={22} color={colors.primary} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          data={reversed}
          keyExtractor={(m) => m.id}
          inverted
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            gap: 10,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const mine = item.sender === "me";
            return (
              <View
                style={[
                  styles.bubbleRow,
                  { justifyContent: mine ? "flex-end" : "flex-start" },
                ]}
              >
                <View
                  style={[
                    styles.bubble,
                    {
                      backgroundColor: mine ? colors.primary : colors.card,
                      borderColor: colors.border,
                      borderWidth: mine ? 0 : 1,
                      borderBottomRightRadius: mine ? 4 : 18,
                      borderBottomLeftRadius: mine ? 18 : 4,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      fontSize: 15,
                      lineHeight: 21,
                      color: mine ? colors.primaryForeground : colors.foreground,
                    }}
                  >
                    {item.text}
                  </Text>
                  <Text
                    style={{
                      fontFamily: fonts.medium,
                      fontSize: 10.5,
                      marginTop: 4,
                      alignSelf: "flex-end",
                      color: mine ? "rgba(255,255,255,0.65)" : colors.mutedForeground,
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            );
          }}
        />

        {/* Composer */}
        <View
          style={[
            styles.composer,
            {
              backgroundColor: colors.card,
              borderTopColor: colors.border,
              paddingBottom: bottomPad + 10,
            },
          ]}
        >
          <View
            style={[
              styles.inputWrap,
              { backgroundColor: colors.background, borderColor: colors.border },
            ]}
          >
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Type a message..."
              placeholderTextColor={colors.mutedForeground}
              style={[styles.input, { color: colors.foreground }]}
              multiline
              testID="chat-input"
            />
          </View>
          <Pressable
            onPress={handleSend}
            disabled={!text.trim()}
            style={[
              styles.sendBtn,
              {
                backgroundColor: text.trim() ? colors.primary : colors.muted,
              },
            ]}
            testID="chat-send"
          >
            <Ionicons
              name="send"
              size={20}
              color={text.trim() ? colors.primaryForeground : colors.mutedForeground}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  missing: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  headerDoctor: { flex: 1, flexDirection: "row", alignItems: "center", gap: 10 },
  headerName: { fontFamily: fonts.bold, fontSize: 16 },
  headerStatus: { fontFamily: fonts.medium, fontSize: 12.5, marginTop: 1 },
  bubbleRow: { flexDirection: "row" },
  bubble: {
    maxWidth: "78%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  composer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 10,
    borderTopWidth: 1,
  },
  inputWrap: {
    flex: 1,
    borderRadius: 22,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 10 : 4,
    maxHeight: 120,
    justifyContent: "center",
  },
  input: { fontFamily: fonts.regular, fontSize: 15, maxHeight: 100 },
  sendBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
});
