import React, {useState, useContext} from 'react';
import {FlatList, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import Styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {dropdownList} from '../Data';
import {UserContext} from '~/Context/MainProductData';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import Products from '~/Components/Products';

const NewProduct = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>();
  const {productData} = useContext<IProductData>(UserContext);

  const handleItemClick = (id: any) => {
    selectedItem === id ? null : setSelectedItem(id);
    setOpen(false);
  };

  return (
    <Container>
      <ProductContainer>
        <FlatList
          onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
            setOpen(false);
          }}
          ListHeaderComponentStyle={{
            marginTop: 16,
            position: 'absolute',
            zIndex: 1,
          }}
          ListHeaderComponent={
            <DropdownContainer>
              <Dropdown onPress={() => setOpen(!open)}>
                <DropdownTitle>
                  {selectedItem
                    ? dropdownList.find(item => item.id === selectedItem)?.value
                    : dropdownList.find(item => item.value)?.value}
                </DropdownTitle>
                {open ? (
                  <AntDesign
                    name="up"
                    size={20}
                    style={{color: 'gray', marginLeft: 8}}
                  />
                ) : (
                  <AntDesign
                    name="down"
                    size={20}
                    style={{color: 'gray', marginLeft: 8}}
                  />
                )}
              </Dropdown>
              {open && (
                <DropdownListContainer
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                  }}>
                  {dropdownList.map((item, index) => (
                    <DropdownList
                      key={index}
                      onPress={() => handleItemClick(item.id)}>
                      <ListText>{item.value}</ListText>
                    </DropdownList>
                  ))}
                </DropdownListContainer>
              )}
            </DropdownContainer>
          }
          data={productData}
          keyExtractor={(item, index) => {
            return `cheapPrice-${index}`;
          }}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ProductListContainer>
              <Products
                style={{
                  width: 180,
                  marginTop: 55,
                }}
                key={index}
                width={180}
                height={220}
                nameFont={18}
                PriceFont={18}
                DiscountFont={18}
                DCPrice={18}
                marginRight={8}
                name={item.name}
                image={item.image}
                price={item.price}
                discount={item.discount}
                discountPrice={item.discountPrice}
              />
            </ProductListContainer>
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default NewProduct;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const ProductContainer = Styled.View`
  margin: 0 16px 0 16px;
`;

const DropdownContainer = Styled.View`
  margin-left: 280px;
  ${Mixin.flexSet('center', 'flex-end', 'null')};
`;

const Dropdown = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'row')};
  width: 100px;
  height: 40px;
`;

const DropdownTitle = Styled.Text`
  font-size: 16px;
`;

const DropdownListContainer = Styled.View`
  margin-top: -4px;
  right: -2px;
  background-color: ${Theme.colors.backColor};
`;

const DropdownList = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'null')};
  width: 100px;
  height: 40px;
`;

const ListText = Styled.Text``;
const ProductListContainer = Styled.View``;
