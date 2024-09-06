import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
    flex: 1,
    padding: 16,
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  trash: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 12,
  },
  trashImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});