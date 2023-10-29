import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#212126',
  },
  image: {
    width: '100%',
    height: '50%', // A imagem ocupa 40% da tela
  },
  title: {
    fontSize: 45,
    marginBottom: 5,
    marginTop: 50,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF',
    width: '80%',
    textAlign: 'center',
  },
  customButton: {
    backgroundColor: '#A67D4B',
    marginTop: 30,
    padding: 10,
    borderRadius: 50,
    width: '85%',
  },
  customButtonText: {
    color: '#FFFFFF',
    fontSize: 25, 
    textAlign: 'center',
  },
});

export default styles;