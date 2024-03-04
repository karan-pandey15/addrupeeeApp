
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';

class knowledge extends React.Component {
  state = {
    videoPlaying: false
  };

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Text style={{marginTop:20,textAlign:'center',fontSize:16,marginBottom:30,fontWeight:'bold'}} >
        Choosing the Right Loan: A Comprehensive Guide...
        </Text>
        {/* YouTube Video */}
        <TouchableOpacity
          onPress={() => this.setState({ videoPlaying: true })}
          style={{ width: '100%', height: '40%' }}
        >
          {this.state.videoPlaying ? (
            <WebView
              source={{ uri: 'https://youtu.be/J28bwxjl4EA?si=4U6gdoEVjEKZWnFh' }}
              style={{ flex: 1 }}
            />
          ) : (
            <Image
              source={require('../images/youtubee.jpg')} // Specify the path to your image
              style={{ flex: 1, resizeMode: 'cover',width:'100%' }} // Adjust the resizeMode as needed
            />
          )}
        </TouchableOpacity>

        <Text style={{marginTop:20,textAlign:'center',fontSize:16,marginBottom:30,fontWeight:'bold'}} >
        Loan Matcher: Find Your Perfect Loan Type...
        </Text>
        {/* YouTube Video */}
        <TouchableOpacity
          onPress={() => this.setState({ videoPlaying: true })}
          style={{ width: '100%', height: '40%' }}
        >
          {this.state.videoPlaying ? (
            <WebView
              source={{ uri: 'https://youtu.be/J28bwxjl4EA?si=4U6gdoEVjEKZWnFh' }}
              style={{ flex: 1 }}
            />
          ) : (
            <Image
              source={require('../images/youtubee.jpg')} // Specify the path to your image
              style={{ flex: 1, resizeMode: 'cover',width:'100%' }} // Adjust the resizeMode as needed
            />
          )}
        </TouchableOpacity>


        {/* Border Bottom */}
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />

        {/* Text Sections */}
        <View style={{ flex: 1 }}>
          {/* Text Section 1 */}
          <View style={{ flex: 1 }}>
            <Text>AddRupee 1</Text>
          </View>

          {/* Border Bottom */}
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
          />

          {/* Text Section 2 */}
          <View style={{ flex: 1 }}>
            <Text>AddRupee 2</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default knowledge;

