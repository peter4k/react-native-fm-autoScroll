/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    } = React;

var example = React.createClass({
    getInitialState: function () {
        return {
            text: ""
        }
    },
    render: function () {
        return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text>
                        FM AutoScroll will scroll the scroll view / list view to make the textInput above the keyboard
                    </Text>
                    <Text style={{marginTop: 150}}>
                        When this text input is focused, the scroll view will automatically scroll to the correct position:
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.text}
                        onChangeText={(text)=>this.setState({text: text})}
                        />
                </ScrollView>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    input: {
        marginTop: 5,
        height: 32,
        width: 180,
        borderWidth: 1
    }
});

AppRegistry.registerComponent('example', () => example);
