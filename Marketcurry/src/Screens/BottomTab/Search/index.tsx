import React, {useState, useEffect, useContext} from 'react';
import {FlatList} from 'react-native';

import Styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';

import {UserContext} from '~/Context/MainProductData';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';
import SearchList from './SearchList';

const Search = () => {
  const [inputText, setInputText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Array<IProduct>>([]);

  const {productData} = useContext<IProductData>(UserContext);

  useEffect(() => {
    const filterData = productData.filter(item =>
      item.name.includes(inputText),
    );
    setFilteredData(filterData);
    console.log(inputText);
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
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => {
            return `search-${index}`;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SearchList id={index} name={item.name} />
          )}
        />
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
