import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

import { useSelector, useDispatch} from "react-redux";
import { addFriend } from "../redux/actions/FriendsActions";

const ModelsScreen = ({navigation}: any) => {

    const dispatch = useDispatch();

    const models = useSelector((store) => store['models'].possible);

    // console.log(typeof friends)

    return (
        <View style={styles.container}>
            <Text>Add models here!</Text>

            {models.map((model, index) => (
                <Button key={model} title={`Add ${model}`} onPress={() => {dispatch(addFriend()); navigation.navigate('Home')} } />
            ))}

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

export default ModelsScreen;
