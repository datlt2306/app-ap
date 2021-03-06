import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ConfigHeader from '../../container/header/configHeader';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { ScrollView } from 'react-native-gesture-handler';
const newDate = new Date();
const fakeData = [
  {
    keyIndex: 'study',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 4,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 5,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 6,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 7,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
    ],
  },
  {
    keyIndex: 'action',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 4,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 5,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 6,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 7,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
    ],
  },
  {
    keyIndex: 'hoc',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 4,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
    ],
  },
  {
    keyIndex: 'hoc',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },

    ],
  },
];
const colums = [
  {
    id: 0,
    title: 'Học Tập',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'study',
  },
  {
    id: 1,
    title: 'Hoạt động',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'actions',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
  ,
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
];
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tab: {
    height: 10,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
  },
  text: {
    color: '#888',
    fontSize: 12,
  },
  icon: {
    marginLeft: 350,
    position: 'absolute',
  },
  View: {
    flexDirection: 'row',
  },
  iconHeader: {
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 320,
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 7,
  },
});
function ScheduleScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [scrollText, setScrollText] = useState(0)
  useEffect(() => {
    const result = () => {
      fakeData.map((item, index) => {
        if (scrollText === index) {
          setData(item.data);
        }
      });
    };
    result();
  }, [scrollText]);
  const navigate = () => {
    navigation.navigate('viewContent', {
      headerTitle: 'THÔNG BÁO NHẬN BẰNG TỐT NGHIỆP ĐỢT 3.2020',
    });
  };
  const renderData = () => {
    return (
      <SafeAreaView style={styles.container}>
        {
          data.map((item, index) => (
            <View key={index} >
              <TouchableOpacity
                onPress={() => navigate()}
                activeOpacity={0.8}
                style={styles.item}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>
                    {item.authorTitle}: {item.author}{' '}
                  </Text>
                  <Text style={styles.text}>
                    {item.timeTitle}: {item.time}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        }

      </SafeAreaView>
    );
  };

  return (
    <>
      <ConfigHeader />
      <ScrollableTabView
        renderTabBar={(tabBarProps) => {
          return (<ScrollableTabBar />)
        }}
        tabBarPosition="top"
        onChangeTab={(e) => {
          setScrollText(e.i)
        }}
        initialPage={0}
        tabBarUnderlineStyle={{
          backgroundColor: 'red',
          height: 1
        }}
        tabBarBackgroundColor={'white'}
        tabBarActiveTextColor={'red'}
        tabBarTextStyle={{ fontSize: 14 }}

      // scrollWithoutAnimation={true}
      >
        {
          colums.map((item, index) => (
            <View key={index} tabLabel={item.title}>
              <ScrollView>
              {renderData()}
              </ScrollView>
            </View>

          ))
        }
      </ScrollableTabView>
    </>
  );
}

ScheduleScreen.propTypes = {};

export default ScheduleScreen;
