import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categorydata from '../assets/data/categorydata';
import populardata from '../assets/data/populardata';
import colors from '../assets/colors/colors';

const Homepagetwo = ({navigation}) => {
  const renderCatItem = ({item}) => (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
          marginLeft: item.id == 1 ? 20 : 0,
        },
      ]}>
      <Image style={styles.categoryImg} source={item.image} />
      <Text style={styles.categoryName}>{item.title}</Text>
      <View
        style={[
          styles.categoryicon,
          {
            backgroundColor: item.selected ? colors.white : colors.price,
          },
        ]}>
        <Feather
          name="chevron-right"
          size={10}
          style={styles.catselecticon}
          color={item.selected ? 'black' : colors.white}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
      >
      <View style={styles.headerWrapper}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Feather name="align-right" size={24} color={colors.textDark} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.subTitle}>Food</Text>
        <Text style={styles.mainTitle}>Delivery</Text>
      </View>

      {/*search*/}
      <View style={styles.searchWrap}>
        <Feather name="search" size={17} color={colors.textDark}></Feather>
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/*category*/}

      <View style={styles.categoryWrap}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <View style={styles.categoryList}>
          <FlatList
            data={categorydata}
            renderItem={renderCatItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {populardata.map((item) => (
          <TouchableOpacity
              key={item.id}
              onPress={() =>
                  navigation.navigate('Details', {
                    item: item,
                  })
              }
          >
            <View style={[styles.popularCardWrapper,{
              marginTop: item.id == 1 ? 10 :20,
            }]}>
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitlesTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight {item.weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Feather name="plus" size={10} color={colors.textDark} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularCardRight}>
                <Image source={item.image} style={styles.popularCardImage} />
              </View>
            </View>
            </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  mainTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoryWrap: {
    marginTop: 30,
  },
  categoryTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoryList: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: colors.white,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryImg: {
    height: 60,
    width: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 22,
  },
  categoryName: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },

  categoryicon: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 26,
    height: 26,
    borderRadius: 50,
  },
  catselecticon: {
    alignSelf: 'center',
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Homepagetwo;
