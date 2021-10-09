import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from "react-native-elements";

const FilterIcon = ({filter}) => {
    return (
                <Card.Title style={styles.filter}>{filter}</Card.Title>
            )
};

const styles = StyleSheet.create({
    filter: {
        fontSize: 12,
        lineHeight: 14,
        borderRadius: 3,
        borderColor: '#DADCE5',
        borderWidth: 1,
        padding: 6
    }
});

export default FilterIcon;
