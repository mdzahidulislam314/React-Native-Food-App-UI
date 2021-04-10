import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

class Tab extends Component {

    constructor() {
        super();
        this.state = {
            activeTab : 'one',
        }
    }

    render() {

        // const activeTab = this.state.activeTab;
        const {activeTab} = this.state;  //same name as sate

        return (
            <View>
                <View >
                    <TouchableOpacity style={{backgroundColor:'red'}} onPress={() => this.setState({activeTab: 'one'})}>
                        <Text  style={activeTab === 'one' ? styles.activeTab : {color:'#fff'} }>Tab One</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'green'}} onPress={() => this.setState({activeTab: 'two'})}>
                        <Text  style={activeTab === 'two' ? styles.activeTab : {color:'#fff'}}>Tab One</Text>
                    </TouchableOpacity>
                </View>

                {(activeTab === 'one') &&
                    <View>
                        <Text >This Tab One Content</Text>
                    </View>
                }

                {(activeTab === 'two') &&
                    <View>
                        <Text>This Tab Two Content</Text>
                    </View>
                }

            </View>
        );
    }
};

const styles = StyleSheet.create({

    activeTab : {

        color: '#333'
    },

});

export default Tab;