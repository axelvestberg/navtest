import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

// New Imports
import RedScreen from './RedScreen';
import GrayScreen from './GrayScreen';
import BlueScreen from './BlueScreen';
import GreenScreen from './GreenScreen';
import OrangeScreen from './OrangeScreen';
import YellowScreen from './YellowScreen';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App2 = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true} tabBarPosition='bottom'>
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="red" title="RED" icon={TabIcon}>
            <Scene key="red"
              component={RedScreen}
              title="Red"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="blue" title="BLUE" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
            />
            <Scene
              key="green"
              component={GreenScreen}
              title="Green"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="orange" title="ORANGE" icon={TabIcon}>
            <Scene
              key="orange"
              component={OrangeScreen}
              title="Orange"
            />
            <Scene
              key="yellow"
              component={YellowScreen}
              title="Yellow"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default App2;