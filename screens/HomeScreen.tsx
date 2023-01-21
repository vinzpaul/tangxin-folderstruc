import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

import {useSelector, useDispatch, useStore} from 'react-redux';

const HomeScreen = ({navigation}: any) => {

    const models = useSelector((store) => store["models"].current.length)

    return (
        <View style={styles.container}>
            <Text>You have {models} followed models.</Text>

            <Button title="Add some Models" onPress={() => navigation.navigate('Models')} />
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
