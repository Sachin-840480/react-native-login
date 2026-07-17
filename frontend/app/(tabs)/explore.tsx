import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { username } = useLocalSearchParams();

  const user = {
    username: username || "admin",
    name: "Satyam Kumar",
    email: "sachin@1712003.com",
    phone: "+91 9113160110",
    department: "Computer Applications",
    role: "Administrator",
  };

  const InfoRow = ({
    icon,
    title,
    value,
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    value: string;
  }) => (
    <View style={styles.infoCard}>
      <Ionicons name={icon} size={24} color="#2563EB" />
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    // <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Profile Header */}

        <View style={styles.header}>
          <Ionicons name="person-circle" size={120} color="#2563EB" />

          <Text style={styles.name}>{user.name}</Text>

          <Text style={styles.role}>{user.role}</Text>
        </View>

        {/* User Information */}

        <InfoRow
          icon="person-outline"
          title="Username"
          value={String(user.username)}
        />

        <InfoRow icon="mail-outline" title="Email" value={user.email} />

        <InfoRow icon="call-outline" title="Phone" value={user.phone} />

        <InfoRow
          icon="school-outline"
          title="Department"
          value={user.department}
        />

        <InfoRow
          icon="shield-checkmark-outline"
          title="Role"
          value={user.role}
        />

        {/* Buttons */}

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={20} color="white" />

          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace("/login")}
        >
          <Ionicons name="log-out-outline" size={20} color="white" />

          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
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
    marginTop: 40,
    alignItems: "center",
    marginBottom: 30,
  },

  name: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },

  role: {
    marginTop: 5,
    color: "#2563EB",
    fontSize: 18,
    fontWeight: "600",
  },

  infoCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  infoTitle: {
    color: "#666",
    fontSize: 14,
  },

  infoValue: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },

  editButton: {
    marginTop: 15,

    backgroundColor: "#2563EB",

    borderRadius: 14,

    height: 55,

    justifyContent: "center",

    alignItems: "center",

    flexDirection: "row",
  },

  logoutButton: {
    marginTop: 15,

    backgroundColor: "#EF4444",

    borderRadius: 14,

    height: 55,

    justifyContent: "center",

    alignItems: "center",

    flexDirection: "row",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
