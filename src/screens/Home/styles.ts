import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0D0D0D',
    height: 200,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  body: {
    padding: 20,
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -50,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,

  },
  button: {
    backgroundColor: '#1e6f9f',
    height: 56,
    width: 56,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  counter: {
    backgroundColor: '#333333',
    padding: 5,
    borderRadius: 50,
    minHeight: 25,
    minWidth: 25,
    
  },
  conterText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
    gap: 10
  },
  created: {
    color: '#4ea8de',
    fontSize: 20,
    fontWeight: 'bold',
  },
  done: {
    color: '#8284fa',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {

  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    gap: 5
  },
  emptyText: {
    color: '#808080',
    fontSize: 20,
    textAlign: 'center',
  },
  emptyTextTitle: {
    color: '#808080',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  }
});