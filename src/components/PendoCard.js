import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Card } from 'react-native-elements'
import PendoDivider from "./PendoDivider";
import FilterIcon from "./FilterIcon";
const PendoCard = ({title,numberLeft,textLeft,textRight,numberRight, isLoadingLeft, isLoadingRight, filter, labelStyle, textStyle}) => {
    return (
        <View style={styles.root}>
            <Card containerStyle={styles.containerStyle}>
                <View style={styles.titleStyle}>
                    <View>
                        <Card.Title style={styles.title}>{title}</Card.Title>
                    </View>
                    { filter && (
                        <View style={styles.filterContainer}>
                            <FilterIcon filter={filter}/>
                        </View>
                            )}
                </View>
                <Card.Divider/>
                <View style={styles.textWrapper}>
                   <PendoDivider
                       textLeft={textLeft}
                       textRight={textRight}
                       numberLeft={numberLeft}
                       numberRight={numberRight}
                       isLoadingLeft={isLoadingLeft}
                       isLoadingRight={isLoadingRight}
                       textStyle={textStyle}
                       labelStyle={labelStyle}
                   />
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    root:{
       flex:1,
        alignItems:'center',
    },
    containerStyle:{
        width: '90%',
        justifyContent:'center',
    },
    title: {
        textAlign: 'left',
    },
    textWrapper:{
        flexDirection: 'row',
    },
    titleStyle: {
        flexDirection: 'row',
    },
    filterContainer:{
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
});

export default PendoCard;
