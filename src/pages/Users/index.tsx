import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import UsersService from '../../actions/user';
import {Skeleton, SkeletonContainer} from 'react-native-skeleton-component';
import CardUser from '../../components/CardUser';

const Users = () => {
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['get-all-users'],
    queryFn: () => UsersService.getAllUsers(),
  });

  const onRefresh = () => refetch();

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={false} />
      }
      removeClippedSubviews={true}>
      {isLoading ? (
        <SkeletonContainer>
          <Skeleton style={styles.cardSkeleton} />
          <Skeleton style={styles.cardSkeleton} />
          <Skeleton style={styles.cardSkeleton} />
          <Skeleton style={styles.cardSkeleton} />
          <Skeleton style={styles.cardSkeleton} />
        </SkeletonContainer>
      ) : (
        data && data.map((info, index) => <CardUser key={index} {...info} />)
      )}

      <View style={styles.hiddenView} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cardSkeleton: {
    width: '100%',
    height: 100,
    marginTop: 5,
  },

  hiddenView: {
    height: 100,
    width: '100%',
  },
});

export default Users;
