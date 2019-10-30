// app/components/Input.js

import React from "react";
import {TextInput,StyleSheet} from 'react-native';

const Input = ({value,changeText,addTodo}) => (
    <TextInput
        value={value}
        onChangeText={changeText}
        onEndEditing={addTodo}
        style={styles.input}
        placeholder={"이번달에 해야할 것 (*눌러서 작성하시오)"}
        maxLength={30}
        returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        paddingTop:15,
    }
})

export default Input;