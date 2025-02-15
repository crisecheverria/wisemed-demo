import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import { View, Text, StyleSheet, Image } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer} data-testid="header">
          <View>
            <Text style={styles.specialtyText}>Traumatología</Text>
            <Text style={styles.doctorText}>Dr. José Pedro Sans</Text>
          </View>
          <Image
            source={require("../assets/images/doctor-icon.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.infoContainer}>
          <Image
            source={require("../assets/images/face-24.png")}
            style={styles.faceIcon}
          />
          <Text style={styles.patientName}>Jorge Avendaño Pérez 35 anos</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            <Text style={styles.infoValue}>Ficha médica:</Text> 77884
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoValue}>Diagnóstico:</Text> Calcificación
            Talón
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoValue}>Intervención</Text> Extirpación en
            talón.
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoValue}>Evaluación preantestésica:</Text>
            Sí
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoValue}>Tiempo de solicitud:</Text>3 dias
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoValue}>Suspensiones:</Text>2
          </Text>
        </View>

        <View style={styles.urgencyIcons}>
          <Image
            source={require("../assets/images/icon-cardio.png")}
            style={styles.faceIcon}
          />
          <Image
            source={require("../assets/images/icon-anestesia.png")}
            style={styles.faceIcon}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EDF7",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: 276,
    height: 367,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#154FBF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 12,
  },
  specialtyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
  },
  doctorText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 18,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 2,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  patientName: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    color: "#000",
  },
  faceIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  infoCard: {
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#000",
    marginVertical: 2,
  },
  infoValue: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    color: "#154FBF",
  },
  urgencyIcons: {
    flexDirection: "row",
  },
  urgencyContainer: {
    marginHorizontal: 16,
    paddingTop: 8,
  },
});
