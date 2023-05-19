import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',

  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 50,
    color: '#fff',
    marginTop: 50
  },
  result: {
    color: '#fff',
    fontSize: 60,
    fontFamily: 'consolaz',
    marginBottom: 10
  },
  saveResult: {
    fontSize: 30,
    fontFamily: 'consolaz',
    color: "rgba(255, 255, 255, 0.5)",
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  innerButton: {
    fontSize: 30,
    fontFamily: 'consolaz',
  },
  signo: {
    fontSize: 15,
    fontFamily: 'consolaz',
    color: "rgba(255, 255, 255, 0.5)",
  },
  error: {
    color: 'tomato',
    fontSize: 20,
    fontFamily: 'consolaz',
    marginBottom: 30,
    textAlign: 'center',
    alignSelf: 'center'

  }
});