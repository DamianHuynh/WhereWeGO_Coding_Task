import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {
  FlatList,
  FlatListProps,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import images from '@assets/png';
import {AddIcon} from '@assets/svg';
import BackgroundView from '@components/BackgroundView';
import ScreenHeader from '@components/ScreenHeader';
import {AppButton, AppText, AppView} from '@components/index';
import {scale} from '@shared/utils';
import {useAppSelector} from '@shared/store';
import {CardViewArea, getListCard} from '@modules/payment/payment-slice';
import Card from '@modules/payment/components/Card';

const ListingScreen = () => {
  const navigation = useNavigation();
  const listCard = useAppSelector(getListCard);

  const navigateToAddingScreen = () => navigation.navigate('Adding');

  const EmptyComponent = useMemo(
    () => (
      <AppView
        gap={scale(17)}
        alignItems="center"
        justifyContent="center"
        style={styles.noCardContent}>
        <Image source={images.Card} />
        <AppView alignItems="center" justifyContent="center" rowGap={scale(13)}>
          <AppView
            alignItems="center"
            justifyContent="center"
            rowGap={scale(14)}>
            <AppText style={styles.noCardTextStyle}>No Cards Found</AppText>
            <AppText style={styles.noCardTextStyle}>
              We recommend adding a card for easy payment
            </AppText>
          </AppView>
          <AppButton.Link
            title="Add New Card"
            onPress={navigateToAddingScreen}
          />
        </AppView>
      </AppView>
    ),
    [],
  );

  const RightSideHeader = useCallback(
    () => (
      <TouchableOpacity onPress={navigateToAddingScreen}>
        <AddIcon />
      </TouchableOpacity>
    ),
    [],
  );

  const renderItem: FlatListProps<CardViewArea>['renderItem'] = ({item}) => {
    return <Card {...item} />;
  };

  const renderSeparator: FlatListProps<CardViewArea>['ItemSeparatorComponent'] =
    () => <AppView style={{height: scale(14)}} />;

  const flatLisStyle = !listCard.length
    ? styles.emptyListContent
    : styles.listContent;

  return (
    <BackgroundView>
      <ScreenHeader title="Cards" RightSideComponent={RightSideHeader} />
      <FlatList
        data={listCard}
        renderItem={renderItem}
        contentContainerStyle={flatLisStyle}
        ListEmptyComponent={EmptyComponent}
        ItemSeparatorComponent={renderSeparator}
      />
    </BackgroundView>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  noCardContent: {
    width: scale(244),
  },
  noCardTextStyle: {
    fontSize: scale(18),
    fontWeight: '400',
    textAlign: 'center',
  },
  listContent: {
    paddingTop: scale(14),
    paddingHorizontal: scale(20),
  },
  emptyListContent: {
    flex: 0.9 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
