import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';

type CardUserProps = {
  name: string;
  description: string;
  img: string;
};

const CardUser = (props: CardUserProps): JSX.Element => {
  return (
    <Card mode="elevated" style={styles.container} removeClippedSubviews>
      <Card.Content style={styles.cardStyle} removeClippedSubviews>
        <View removeClippedSubviews>
          <Avatar.Image
            key={props.img}
            source={{
              uri: props.img,
            }}
          />
        </View>
        <View style={styles.aboutView}>
          <Text>{props.name}</Text>
          <Text
            style={styles.descriptionText}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {props.description}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  aboutView: {
    marginLeft: 15,
    flexShrink: 1,
  },
  descriptionText: {
    marginTop: 10,
  },
});
