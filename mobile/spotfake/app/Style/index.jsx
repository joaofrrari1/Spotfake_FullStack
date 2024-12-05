import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
<<<<<<< HEAD
    backgroundColor:  "#FFFFFF", // Fundo escuro para um visual moderno
=======
    backgroundColor: "#1E1E2F", // Fundo escuro
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    width: "100%",
  },

  modal_scrollview: {
<<<<<<< HEAD
    backgroundColor:  "#FFFFFF", // Fundo diferenciado para modal
    padding: 20,
    borderRadius: 12,
=======
    backgroundColor: "#2E2E3F", // Fundo levemente mais claro
    padding: 20,
    borderRadius: 10,
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
  },

  outer_container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#121212",
=======
    backgroundColor: "#1E1E2F",
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    alignItems: "center",
  },

  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor:  "#FFFFFF",
    width: "90%",
    justifyContent: "center",
    padding: 20,
    margin: 15,
=======
    backgroundColor: "#FFFFFF",
    width: 380,
    justifyContent: "center",
    padding: 16,
    margin: 20,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: 380,
    justifyContent: "center",
    padding: 16,
    margin: 20,
    alignItems: "center",
    borderRadius: 15,
  },

  amazing_container: {
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 20,
    margin: 20,
    alignItems: "center",
    borderRadius: 15,
  },

  profile_container: {
    padding: 60,
    backgroundColor: "#2E2E3F",
    width: 360,
    borderRadius: 15,
  },

  modal_container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10, // Para Android
  },

  title: {
<<<<<<< HEAD
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF", // Texto branco
=======
    fontSize: 26,
    marginBottom: 16,
    textAlign: "center",
    color: "#000000",
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    fontWeight: "700",
  },

  input: {
<<<<<<< HEAD
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
=======
    height: 45,
    width: 300,
    borderColor: "#666",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    color: "#000",
    borderRadius: 8,
  },

  pressable: {
    height: 45,
    width: 300,
    backgroundColor: "#2E8B57", // Verde
    margin: 10,
    borderRadius: 10,
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    justifyContent: "center",
    alignItems: "center",
  },

  pressable_text: {
    fontSize: 18,
<<<<<<< HEAD
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
=======
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  black_text: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignSelf: "center",
  },

  link_pressable: {
    height: 40,
    width: 160,
    backgroundColor: "#2E8B57", // Verde
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },

  link_text: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
  },

  home_container: {
    flex: 1,
    flexDirection: "column",
  },

  list: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  list_container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 30,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
  },

  navbar: {
    display: "flex",
    backgroundColor: "#1E1E2F",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 60,
    justifyContent: "space-between",
  },

  navbar_pressable: {
    flex: 1,
    height: 60,
    backgroundColor: "transparent",
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },

  footer: {
<<<<<<< HEAD
    backgroundColor: "#1E1E2F",
=======
    flex: 0.15,
    paddingTop: 10,
    backgroundColor: "#2E2E3F",
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
<<<<<<< HEAD
    borderTopWidth: 1,
    borderTopColor: "#333",
=======
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
  },

  profile: {
    width: 50,
    height: 50,
<<<<<<< HEAD
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor:  "#FFFFFF",
=======
    borderWidth: 2,
    borderColor: "#2E8B57", // Verde
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },

  artist_photo: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
  },

  artist_button: {
    alignItems: "center",
<<<<<<< HEAD
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
=======
    justifyContent: "flex-start",
    width: 140,
    height: 180,
    backgroundColor: "#2E8B57", // Verde
    borderRadius: 20,
  },

  album_photo: {
    width: 300,
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
  },

  album_button: {
    alignItems: "center",
<<<<<<< HEAD
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
=======
    justifyContent: "flex-start",
    width: 300,
    height: 230,
    backgroundColor: "#2E8B57", // Verde
    borderRadius: 20,
  },

  music_container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#666",
    borderBottomWidth: 1,
  },

  big_photo: {
    width: 600,
    height: 350,
  },

  lil_photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2E8B57", // Verde
  },

  lil_button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
  },

  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
>>>>>>> 388a331fe78e8da298f7cc0be68f6e81bd0054c7
});

export default styles;
