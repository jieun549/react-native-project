// app/components/SubTitle.js

import React from "react";
import {View,Text,StyleSheet} from "react-native"

const SubTitle = ({title}) => (
    <View>
        <Text style={styles.subTitleText}>{title}</Text>
    </View>
);

styles = StyleSheet.create({
    subTitleText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600"
    }
})

export default SubTitle;