import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

const FriendsScreen = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Text>Add friends here!</Text>

            <Button
                title="Back to home"
                onPress={() => navigation.navigate("Home")}
            />
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

export default FriendsScreen;
