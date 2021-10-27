import React, {useState} from 'react';
import Styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';
import {CategoryName} from '../Data';

const CategoryList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [hidden, hiddenSet] = useState<any>({});
  const [selectedItem, setSelectedItem] = useState<any>({});

  const handleItemClick = (id: number) => {
    selectedItem === id ? null : setSelectedItem({[id]: !selectedItem[id]});
  };

  return (
    <>
      {CategoryName.map((item, index) => (
        <Container>
          <Dropdown key={index} onPress={() => handleItemClick(item.id)}>
            <TitleWrap>
              <DropdownTitle>{item.name}</DropdownTitle>
            </TitleWrap>
            <IconWrap>
              {open ? (
                <AntDesign name="up" size={20} style={{color: 'gray'}} />
              ) : (
                <AntDesign name="down" size={20} style={{color: 'gray'}} />
              )}
            </IconWrap>
          </Dropdown>
          {item.list.map((item, index) => (
            <>
              {selectedItem[item.id] && (
                <ListContainer key={index}>
                  <ListText>{item.name}</ListText>
                </ListContainer>
              )}
            </>
          ))}
        </Container>
      ))}
    </>
  );
};

export default CategoryList;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const Dropdown = Styled.TouchableOpacity`
  ${Mixin.flexSet('space-between', 'center', 'row')};
  height: 60px;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
`;

const TitleWrap = Styled.View`
  ${Mixin.flexSet('space-between', 'center', 'row')};
  margin: 0 16px 0 32px;
`;

const DropdownTitle = Styled.Text`
  font-size: 18px;
  color: ${Theme.colors.mainColor};
`;

const IconWrap = Styled.View`
  margin-right: 16px;
`;

const ListContainer = Styled.View`
  ${Mixin.flexSet('flex-start', 'null', 'null')};
  padding: 16px 0 16px 32px;
  background-color: #ebebeb;

`;

const ListText = Styled.Text`
  font-size: 16px;
`;
