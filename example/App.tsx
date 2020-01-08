import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, Button} from 'react-native';
import {ReanimatedArcBase} from 'reanimated-arc';
import Reanimated, {Easing} from 'react-native-reanimated';

const start = 0;
const end = 180;

const App = () => {
  const arcAngle = useRef(new Reanimated.Value(start));
  const [toValue, setToValue] = useState(end);
  const animate = () =>
    Reanimated.timing(arcAngle.current, {
      toValue: toValue,
      easing: Easing.inOut(Easing.quad),
      duration: 800,
    }).start(() => {
      setToValue(toValue === start ? end : start);
    });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ReanimatedArcBase
          color="coral"
          diameter={350}
          lineWidth={30}
          arcSweepAngle={arcAngle.current}
          lineCap="butt"
          rotation={Reanimated.concat(
            Reanimated.divide(arcAngle.current, 2),
            'deg',
          )}
        />
        <Button title="Animate!" onPress={animate} />
      </SafeAreaView>
    </>
  );
};

export default App;