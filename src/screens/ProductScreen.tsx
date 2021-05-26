import React, {useEffect,useContext }from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../Navigation/ProductsNavigator';
import  Icon  from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/UseForm';
import { Producto } from '../interfaces/appInterfaces';
import { ProductContext } from '../context/ProductsContexts';







interface Props extends StackScreenProps<ProductsStackParams,'ProductScreen'>{};

export const ProductScreen = ({route,navigation}:Props) => {

   

    const {id='',name=''}=route.params;

    const {categories}=useCategories();
    const {loadProductById,addProduct,updateProduct} = useContext(ProductContext)
    const {_id,categoriaId,nombre,img,form,onChange,setFormValue}=useForm({
        _id:id,
        categoriaId:'',
        nombre:name,
        img:''
    });

 

    useEffect(() => {
        
        navigation.setOptions({
            title: (nombre)? nombre:(_id.length>0)?'Sin Nombre':'Nueva ISO'
        })   
    }, [nombre])


    useEffect(() => {
        loadProduct()
    }, [])
    const loadProduct=async()=>{
        if(id.length===0) return;
         const product= await loadProductById(id)
         setFormValue({
             _id:id,
             categoriaId: product.categoria._id,
             img:product.img|| '',
             nombre,
            })
    }
    const saveOrUpdate=async()=>{

        if(id.length>0){
            updateProduct(categoriaId,nombre,id)
            
        }else
        {
            const tempCategoriaId=categoriaId||categories[0]._id
            const newProduct=addProduct(tempCategoriaId,nombre)
            onChange((await newProduct)._id,'_id')
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.label}>Nombre de la tarjeta:</Text>
            <TextInput
                placeholder='Tarjeta'
                style={styles.textImput}
                value={nombre}
                onChangeText={ (value) =>onChange( value ,'nombre')}
            
            />
            <Text style={styles.label}>Categoria:{name}</Text>
           {/*  <Button
            title="Guardar"
            onPress={()=>{}}
            color='rgba(179,9,0,1)'
            /> */}
            <Picker
                selectedValue={categoriaId}
                onValueChange={(itemValue) =>
                   onChange(itemValue,'categoriaId')
                    
                }
                
            >       
                    {categories.map(c=> 
                        <Picker.Item 
                            label={c.nombre} 
                            value={c._id}
                            key={c._id}
                            />
                            
                        )
                    }
                    
                    
            </Picker>
            <View style={{alignItems:'center', marginTop:20}}>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={saveOrUpdate}
            >
                
                <View style={styles.buttonSave}>
                    <Icon
                            name="save-outline"
                            color="white"
                            size={25}
                    />
                    <Text style={{fontSize:15,color:'white'}}>Guardar</Text>
                   
                </View>
            </TouchableOpacity>
            </View>
              {
                  (_id.length>0)&&(
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10}}>
                    <TouchableOpacity
                    activeOpacity={0.5}>
                        
                        <View style={styles.buttonSave}>
                            <Icon
                                    name="camera-outline"
                                    color="white"
                                    size={25}
                            />
                            <Text style={{fontSize:15,color:'white'}}>Camara</Text>
                        
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity
                    activeOpacity={0.5}
                    >
                        
                        <View style={styles.buttonSave}>
                            <Icon
                                    name="image-outline"
                                    color="white"
                                    size={25}
                            />
                            <Text style={{fontSize:15,color:'white'}}>Galeria</Text>
                        
                        </View>
                    </TouchableOpacity>
                </View>

                  )
              }
            
             
             {(img.length>0)&&(
                <Image
                    source={{uri:img}}
                    style={{
                        width:'100%',
                        height:300
                        
                        
                    }}
                /> 
                )
            }   
            </ScrollView>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        marginHorizontal:20,
    },
    label:{
        fontSize:18
    },
    textImput:{
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:20,
        borderColor:'rgba(0,0,0,0.4)',
        height:40,
        marginTop:5,
        marginBottom:15
        
        
    },
    buttonSave:{
        backgroundColor:'rgba(179,9,0,1)',
        borderRadius:20,
        height:30,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        



    }

});