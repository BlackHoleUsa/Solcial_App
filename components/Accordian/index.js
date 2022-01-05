import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';
import {styles} from '../../screens/Profile/Styles';
const Accordian = () => {
  const [expanded, setExpanded] = useState(true);
  const [icon, setIcon] = useState('chevron-right');
  const handlePress = () => {
    setExpanded(!expanded);
    expanded ? setIcon('chevron-right') : setIcon('chevron-down');
  };
  return (
    <List.Section style={styles.container__accordian}>
      <List.Accordion
        title="Uncontrolled Accordion"
        right={props => <List.Icon {...props} icon={icon} />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default Accordian;
