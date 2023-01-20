import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Text>You have friends.</Text>

            <Button title="Add some Friends" onPress={() => navigation.navigate('Friends')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
