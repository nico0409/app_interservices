import React from 'react'
import { FlatList, View } from 'react-native'

import { styles } from '../theme/appTheme';
import { FlatLIstMenuItem } from '../components/FlatLIstMenuItem';
import { menuItems } from '../data/MenuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => <FlatLIstMenuItem menuItem={ item } /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú" />  }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            /> 

        </View>
    )
}
