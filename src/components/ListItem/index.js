import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ContainerButton, Item } from './styles';

export default function ListItem(){
    return(
        <View>
            <ContainerButton>
                <Feather
                    name='link'
                    color='#FFF'
                    size={24}
                />
                <Item>https://google.com</Item>
            </ContainerButton>
        </View>
    );
}