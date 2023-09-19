import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function RestaurantPicker({ setSelectedRestaurant }) {
    const [restaurants, setRestaurants] = useState([...]); // Insira seus dados de restaurantes aqui

    return (
        <View style={styles.container}>
            <Text>Selecione um restaurante:</Text>
            <Picker
                selectedValue={selectedRestaurant}
                onValueChange={(itemValue) => setSelectedRestaurant(itemValue)}
            >
                <Picker.Item label="Selecione um restaurante..." value={null} />
                {restaurants.map((restaurant) => (
                    <Picker.Item key={restaurant.id} label={restaurant.name} value={restaurant.id} />
                ))}
            </Picker>
        </View>
    );
}

// Estilos removidos para economizar espaço - você pode adicionar os estilos que tinha anteriormente aqui.