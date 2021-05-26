import React, { useContext,useEffect,useState} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { ProductContext } from '../context/ProductsContexts';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../Navigation/ProductsNavigator';





interface Props extends StackScreenProps<ProductsStackParams,'ProductsScreen'>{};

export const ProductsScreen = ({navigation}:Props) => {

    const {products,loadProducts}=useContext(ProductContext)

    const [refreshing, setrefreshing] = useState(false);
  
    useEffect(() => {
       
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity 
                activeOpacity={0.5}
                style={{marginRight:15}}
                onPress={()=>navigation.navigate('ProductScreen',{
                   
                })}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            )
        })
    
    }, [])


    const loadProductsFromBackend= async()=>{
        setrefreshing(true);
       await loadProducts();
        setrefreshing(false); 

    }
    return (
        <ScrollView
        refreshControl={
            <RefreshControl 
            refreshing={refreshing}
            onRefresh={loadProductsFromBackend}
            //progressBackgroundColor={colors.primary}
            colors={['red','yellow','green']}
            //ios
            //style={{backgroundColor:colors.primary}}
            tintColor="white"
            title="refreshing"
            >
            

            </RefreshControl>
        }
        >
            <View style={{flex:1,marginHorizontal:10}}>

                <FlatList
                data={products}
                keyExtractor={(p)=>p._id}
                renderItem={({item})=>(
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={
                            ()=> navigation.navigate('ProductScreen',{
                                id:item._id,
                                name:item.nombre
                            })}
                    >
                        <Text style={styles.productName}>{item.nombre}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={()=>(
                    <View style={styles.itemSeparator}></View>
                )}
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    productName:{
        fontSize:20,
    },
    itemSeparator:{
        borderBottomWidth:2,
        borderBottomColor:'rgba(0,0,0,0.3)'
        
    }
    
    
    
});