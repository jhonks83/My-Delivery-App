import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Menu({ selectedRestaurant, setSelectedRestaurant }) {
    const [menus, setMenus] = useState({...}); // Insira seus dados de menu aqui
    const [cart, setCart] = useState([]);
    const restaurant = restaurants.find(r => r.id === selectedRestaurant);
    const menuItems = menus[selectedRestaurant] || [];

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.menuHeader}>Menu para {restaurant ? restaurant.name : "Restaurante Desconhecido"}</Text>
            
            {menuItems.map((item) => (
                <View key={item.id} style={styles.menuItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                    <Button title="Adicionar ao carrinho" onPress={() => addToCart(item)} />
                </View>
            ))}

            <TouchableOpacity onPress={() => setSelectedRestaurant(null)} style={styles.backButton}>
                <Text>Voltar para lista de restaurantes</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos removidos para economizar espaço - você pode adicionar os estilos que tinha anteriormente aqui.