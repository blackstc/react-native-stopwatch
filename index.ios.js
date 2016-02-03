var React = require('react-native');
var {
    Text,
    View,
    AppRegistry,
    StyleSheet
} = React;

var StopWatch = React.createClass({
    render: function() {
        return <View style={styles.container}>
            <View style={[styles.header, this.border('yellow')]}>
                <View style={[styles.timerWrapper, this.border('red')]}>
                    <Text>
                        00:00.0
                    </Text>
                </View>
                <View style={[styles.buttonWrapper, this.border('green')]}>
                    {this.startStopButton()}
                    {this.lapButton()}
                </View>
            </View>

            <View style={[styles.footer, this.border('blue')]}>
                <Text>
                    I'm a list of laps
                </Text>
            </View>
        </View>
    },
    startStopButton: function() {
        return <View>
            <Text>
                Start
            </Text>
        </View>
    },
    lapButton: function() {
        return <View>
            <Text>
                Lap
            </Text>
        </View>
    },
    border: function(color) {
        return {
            borderColor: color,
            borderWidth: 4
        }
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1
    },
    timerWrapper: { // red
        // takes up 5/8ths of avail space since button and timer are siblings
        flex: 5
    },
    buttonWrapper: { // green
        // takes up 3/8ths of avail space
        flex: 3
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
