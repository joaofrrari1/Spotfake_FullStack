import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#1E1E2F", // Fundo escuro
    width: "100%",
  },

  modal_scrollview: {
    backgroundColor: "#2E2E3F", // Fundo levemente mais claro
    padding: 20,
    borderRadius: 10,
  },

  outer_container: {
    flex: 1,
    backgroundColor: "#1E1E2F",
    alignItems: "center",
  },

  container: {
    flex: 1,
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
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    marginBottom: 16,
    textAlign: "center",
    color: "#000000",
    fontWeight: "700",
  },

  input: {
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
    justifyContent: "center",
  },

  pressable_text: {
    fontSize: 18,
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
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 0.15,
    paddingTop: 10,
    backgroundColor: "#2E2E3F",
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
  },

  profile: {
    width: 50,
    height: 50,
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
  },

  artist_button: {
    alignItems: "center",
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
  },

  album_button: {
    alignItems: "center",
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
});

export default styles;
