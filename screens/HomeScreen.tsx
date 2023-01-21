import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

import {useSelector, useDispatch, useStore} from 'react-redux';

const HomeScreen = ({navigation}: any) => {

    const models = useSelector((store) => store["models"].current.length)
    const modelList = useSelector((store)=>store['models'].current)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You have {models} followed models.</Text>

            {modelList.map((model, index) => {
                return (
                    <Text key={index}>{model}</Text>
                )
            })}

            <View style={styles.button}>
                <Button title="Add some Models" onPress={() => navigation.navigate('Models')} />
            </View>
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
    text: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    }
});

export default HomeScreen;
