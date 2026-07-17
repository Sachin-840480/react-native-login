import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const { username } = useLocalSearchParams();

  const today = new Date().toLocaleDateString();

  return (
    // <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome 👋</Text>

            <Text style={styles.username}>{username || "Administrator"}</Text>
          </View>

          <Ionicons name="person-circle" size={65} color="#2563EB" />
        </View>

        {/* Date */}

        <Text style={styles.date}>{today}</Text>

        {/* Cards */}

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Ionicons name="people" size={34} color="#2563EB" />

            <Text style={styles.cardNumber}>120</Text>

            <Text style={styles.cardTitle}>Users</Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="shield-checkmark" size={34} color="#10B981" />

            <Text style={styles.cardNumber}>Active</Text>

            <Text style={styles.cardTitle}>Status</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Ionicons name="server" size={34} color="#F59E0B" />

            <Text style={styles.cardNumber}>MySQL</Text>

            <Text style={styles.cardTitle}>Database</Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="cloud-done" size={34} color="#8B5CF6" />

            <Text style={styles.cardNumber}>Online</Text>

            <Text style={styles.cardTitle}>Backend</Text>
          </View>
        </View>

        {/* Activity */}

        <Text style={styles.sectionTitle}>Recent Activity</Text>

        <View style={styles.activityCard}>
          <View style={styles.row}>
            <Ionicons name="checkmark-circle" size={22} color="#10B981" />

            <Text style={styles.activityText}>Login Successful</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="checkmark-circle" size={22} color="#10B981" />

            <Text style={styles.activityText}>Connected to Flask API</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="checkmark-circle" size={22} color="#10B981" />

            <Text style={styles.activityText}>Connected to MySQL Database</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="checkmark-circle" size={22} color="#10B981" />

            <Text style={styles.activityText}>Expo Router Running</Text>
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
    padding: 20,
  },

  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: 20,
    color: "#555",
  },

  username: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  date: {
    marginTop: 8,
    color: "#666",
    marginBottom: 25,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  card: {
    width: "48%",
    backgroundColor: "white",
    padding: 18,
    borderRadius: 18,

    alignItems: "center",

    elevation: 6,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,
  },

  cardNumber: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: "bold",
  },

  cardTitle: {
    color: "#666",
    marginTop: 6,
  },

  sectionTitle: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },

  activityCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 18,

    elevation: 6,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  activityText: {
    marginLeft: 12,
    fontSize: 16,
  },
});
