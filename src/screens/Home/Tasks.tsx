import * as React from 'react';
import {StyleSheet, FlatList, Pressable, ActivityIndicator} from 'react-native';
import {Check, Text, UnCheck, View} from 'ui';
import {Header} from './Header';

type TaskType = {
  label: string;
  done: boolean;
  color: string;
};

const TaskItem = ({label, done: d, color}: TaskType) => {
  const [done, setDone] = React.useState(d);
  return (
    <Pressable onPress={() => setDone(!done)}>
      <View flexDirection="row" alignItems="center">
        {done ? <Check style={styles.done} /> : <UnCheck style={styles.done} />}
        <View
          flex={1}
          paddingVertical="l"
          flexDirection="row"
          alignItems="center"
          borderBottomWidth={1}
          borderBottomColor="grey"
          opacity={done ? 0.3 : 1}>
          <Text variant="subheader" style={{flex: 1}}>
            {label}
          </Text>
          <View
            width={12}
            height={12}
            borderRadius={12}
            marginHorizontal="m"
            style={{backgroundColor: color}}
          />
        </View>
      </View>
    </Pressable>
  );
};

export const Tasks = () => {
 
  return (
   <Text>Task List</Text>
  );
};

const styles = StyleSheet.create({
  done: {
    marginHorizontal: 16,
  },
});
