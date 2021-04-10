import React, {Component} from 'react';
import  {View,StyleSheet,Text} from 'react-native';
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.profileimage}></View>
                </View>
                <View style={styles.center}></View>

                <View style={styles.bottom}>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                            <Text>Item Number 1</Text>
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                            <Text>Item Number 1</Text>
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                            <Text>Item Number 1</Text>
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                            <Text>Item Number 1</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top:{
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#98d2c1'
    },
    profileimage:{
        width:140,
        height: 140,
        borderRadius: 100,
        backgroundColor: '#eee',
        borderWidth: 4,
        borderColor: '#fff',

    },
    center: {
        height: '10%',
        backgroundColor: '#7fbcac',

    },
    bottom:{
        height: '50%',
        backgroundColor : '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    bottomItem:{
        height: '50%',
        width: '50%',
        padding: 5,
    },
    bottomItemInner:{
        flex: 1,
        backgroundColor: '#292929',

    }

})

export default Home;