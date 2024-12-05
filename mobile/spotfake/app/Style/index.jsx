import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor:  "#FFFFFF", // Fundo escuro para um visual moderno
    width: "100%",
  },

  modal_scrollview: {
    backgroundColor:  "#FFFFFF", // Fundo diferenciado para modal
    padding: 20,
    borderRadius: 12,
  },

  outer_container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor:  "#FFFFFF",
    width: "90%",
    justifyContent: "center",
    padding: 20,
    margin: 15,
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10, // Para Android
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF", // Texto branco
    fontWeight: "700",
  },

  input: {
    height: 50,
    width: "90%",
    borderColor: "#666",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    color: "#FFFFFF", // Texto branco no input
    backgroundColor: "#1F1F2E", // Fundo escuro para o input
    borderRadius: 10,
  },

  pressable: {
    height: 50,
    width: "90%",
    backgroundColor: "#4CAF50", // Verde modernizado
    margin: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  pressable_text: {
    fontSize: 18,
    color: "#FFFFFF", // Texto branco no botão
    fontWeight: "600",
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
    borderWidth: 3,
    borderColor:  "#FFFFFF", // Detalhe verde
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
  },

  list_container: {
    width: "90%",
    alignItems: "flex-start",
    backgroundColor:  "#FFFFFF",
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },

  list_text: {
    fontSize: 18,
    color: "#FFFFFF", // Texto branco nas listas
    fontWeight: "500",
  },

  navbar: {
    backgroundColor: "#1E1E2F",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },

  footer: {
    backgroundColor: "#1E1E2F",
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor:  "#FFFFFF",
  },

  artist_button: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 200,
    backgroundColor: "#333",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },

  artist_photo: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  album_button: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 250,
    backgroundColor: "#333",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },

  album_photo: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
