import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    loginButton: {
        padding: 15,
        backgroundColor: '#007BFF',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    menuHeader: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    itemName: {
      fontSize: 18,
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    backButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#eee',
    },
    cartHeader: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
    },
});