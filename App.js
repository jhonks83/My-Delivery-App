import React, { useState } from 'react';
import Login from './Login';
import RestaurantPicker from './RestaurantPicker';
import Menu from './Menu';
import { styles } from './styles';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    if (!isLoggedIn) {
        return <Login setIsLoggedIn={setIsLoggedIn} />;
    }
    
    if (isLoggedIn && !selectedRestaurant) {
        return <RestaurantPicker setSelectedRestaurant={setSelectedRestaurant} />;
    }
    
    if (isLoggedIn && selectedRestaurant) {
        return <Menu selectedRestaurant={selectedRestaurant} setSelectedRestaurant={setSelectedRestaurant} />;
    }

    return (
        <View style={styles.container}>
            <Text>Você está logado!</Text>
        </View>
    );
}