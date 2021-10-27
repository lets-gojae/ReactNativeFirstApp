import React, {useState, useEffect, useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import {UserContext} from '~/Context/MainProductData';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

type NavigationProp = StackNavigationProp<
  ProductDetailNaviParamList,
  'ProductDetail'
>;
interface Props {
  navigation: NavigationProp;
}

const Search = ({navigation}: Props) => {
  const [inputText, setInputText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Array<IProduct>>([]);

  const {productData} = useContext<IProductData>(UserContext);

  useEffect(() => {
    const filterData = productData.filter(item =>
      item.name.includes(inputText),
    );
    setFilteredData(filterData);
  }, [inputText]);

  return (
    <Container>
      <SearchContainer>
        <TextInput
          placeholder="검색어를 입력해주세요"
          onChangeText={text => setInputText(text)}
        />
        <Feather
          name="search"
          size={20}
          style={{position: 'absolute', top: 13, left: 13, color: 'gray'}}
        />
      </SearchContainer>
      {inputText.length !== 0 ? (
        <SearchListContainer>
          {filteredData.map((item, index) => (
            <SearchItem
              key={index}
              onPress={() => navigation.navigate('ProductDetail', {item})}>
              {console.log(item)}
              <ItemName>{item.name}</ItemName>
            </SearchItem>
          ))}
        </SearchListContainer>
      ) : null}
    </Container>
  );
};

export default Search;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const SearchContainer = Styled.View`
  height: 48px;
  margin: 16px
  background-color: ${Theme.colors.containerColor};
`;

const TextInput = Styled.TextInput`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  background-color: white;
`;

const ListHeaderText = Styled.Text``;

const SearchListContainer = Styled.ScrollView``;

const SearchItem = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'row')};
  width: 390px;
  height: 40px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #e8e8e8;
  /* background-color: ${Theme.colors.mainColor}; */
`;

const ItemName = Styled.Text``;
