import { useState } from "react";
import {
  View,
 Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import api from "../services/api";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter username and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/login", {
        username,
        password,
      });

      if (res.data.success) {
        router.replace({
          pathname: "/(tabs)",
          params: {
            username: res.data.username,
          },
        });
      } else {
        Alert.alert("Login Failed", res.data.message);
      }
    } catch (error) {
      Alert.alert("Server Error", "Unable to connect to Flask backend.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

 return (
  <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="person-circle"
          size={90}
          color="#2563EB"
          style={{ alignSelf: "center" }}
        />

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>
          Login to continue
        </Text>

        {/* Username */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#666"
          />

          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Password */}

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#666"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry={hidePassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Ionicons
              name={hidePassword ? "eye-off" : "eye"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={login}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>LOGIN</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3FF",
    justifyContent: "center",
    padding: 25,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#ddd",

    borderRadius: 12,

    paddingHorizontal: 12,

    marginBottom: 18,

    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",

    borderRadius: 12,

    paddingVertical: 15,

    marginTop: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});