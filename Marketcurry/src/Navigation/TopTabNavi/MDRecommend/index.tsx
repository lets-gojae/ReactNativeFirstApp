import React from 'react';
import {FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GiftSet from '~/Screens/AppHome/CurryRecommend/MdRecommend/GiftSet';
import Vegetable from '~/Screens/AppHome/CurryRecommend/MdRecommend/Vegetable';
import FruitNutRice from '~/Screens/AppHome/CurryRecommend/MdRecommend/FruitNutRice';
import Seafood from '~/Screens/AppHome/CurryRecommend/MdRecommend/Seafood';
import Butchery from '~/Screens/AppHome/CurryRecommend/MdRecommend/Butchery';
import MainDish from '~/Screens/AppHome/CurryRecommend/MdRecommend/MainDish';
import Salad from '~/Screens/AppHome/CurryRecommend/MdRecommend/Salad';
import Noodle from '~/Screens/AppHome/CurryRecommend/MdRecommend/Noodle';
import WaterMilk from '~/Screens/AppHome/CurryRecommend/MdRecommend/WaterMilk';

import {Theme} from '~/styles/Theme';

const MainTabStack = createMaterialTopTabNavigator();

export default function MDRecommend() {
  return (
    <MainTabStack.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: Theme.colors.mainColor,
        inactiveTintColor: Theme.colors.grayColor,
        pressColor: Theme.colors.mainColor,
        indicatorStyle: {
          borderBottomWidth: 3,
          borderBottomColor: Theme.colors.mainColor,
        },
        labelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
        style: {
          backgroundColor: Theme.colors.backColor,
        },
      }}>
      <MainTabStack.Screen name="추석 선물세트" component={GiftSet} />
      <MainTabStack.Screen name="채소" component={Vegetable} />
      <MainTabStack.Screen name="과일·견과·쌀" component={FruitNutRice} />
      <MainTabStack.Screen name="수산·해산·건어물" component={Seafood} />
      <MainTabStack.Screen name="정육·계란" component={Butchery} />
      <MainTabStack.Screen name="국·반찬·메인요리" component={MainDish} />
      <MainTabStack.Screen name="샐러드·간편식" component={Salad} />
      <MainTabStack.Screen name="면·양념·오일" component={Noodle} />
      <MainTabStack.Screen name="생수·음료·우유·커피" component={WaterMilk} />
    </MainTabStack.Navigator>
  );
}

// export default function MDRecommend() {
//   return (
//     <FlatList
//       style={{height: 40}}
//       data={null}
//       renderItem={() => (
//         <>
//           <MainTabStack.Navigator
//             tabBarOptions={{
//               activeTintColor: Theme.colors.mainColor,
//               inactiveTintColor: Theme.colors.grayColor,
//               pressColor: Theme.colors.mainColor,
//               indicatorStyle: {
//                 borderBottomWidth: 3,
//                 borderBottomColor: Theme.colors.mainColor,
//               },
//               labelStyle: {
//                 fontSize: 13,
//                 fontWeight: '600',
//               },
//               style: {
//                 backgroundColor: Theme.colors.backColor,
//               },
//             }}>
//             <MainTabStack.Screen name="추석 선물세트" component={GiftSet} />
//             <MainTabStack.Screen name="채소" component={Vegetable} />
//             <MainTabStack.Screen name="과일·견과·쌀" component={FruitNutRice} />
//             <MainTabStack.Screen name="수산·해산·건어물" component={Seafood} />
//             <MainTabStack.Screen name="정육·계란" component={Butchery} />
//             <MainTabStack.Screen name="국·반찬·메인요리" component={MainDish} />
//             <MainTabStack.Screen name="샐러드·간편식" component={Salad} />
//             <MainTabStack.Screen name="면·양념·오일" component={Noodle} />
//             <MainTabStack.Screen
//               name="생수·음료·우유·커피"
//               component={WaterMilk}
//             />
//           </MainTabStack.Navigator>
//         </>
//       )}
//     />
//   );
// }
