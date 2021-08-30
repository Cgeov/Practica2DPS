import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaView,Text,View,FlatList,StyleSheet,StatusBar,Image} from 'react-native';
import { Card, Button } from 'react-native-elements'
const DATA=[
    {
        id: '1',
        title: 'Pupusas',
        src:require('./src/img/pupusas.webp'),
        texto: 'Se trata de tortillas hechas de masa de maíz o de arroz que pueden rellenarse con diferentes alimentos (queso, frijoles, chicharrón. etc).'
    },
    {
        id: '2',
        title: 'Pasteles',
        src:require('./src/img/pasteles.jpg'),
        texto: 'Se trata de un tentempié hecho de masa de maíz frita rellena de carne, pollo y verduras. La masa de maíz va condimentada con sal, consomé de pollo y achiote. Las verduras utilizadas son, generalmente, papa, zanahoria y güisquil'
    },
    {
        id: '3',
        title: 'Yuca frita',
        src:require('./src/img/yuca.jpg'),
        texto: 'La yuca frita consiste en el tubérculo cocinado y posteriormente frito, acompañado de salsas o platillos con carne: chicharrones o pepescas, unos pequeños pescados de la zona.'
    },

];
const Item = ({title,img,texto}) => (
    <View style={{flex:1, backgroundColor:'#6B7FD7'}}>
    <Card>
    <Card.Title>{title}</Card.Title>
    <Card.Divider/>
    <Card.Image source={img}/>
    <Card.Divider/>
      <Text style={{marginBottom: 10}}>
        {texto}
      </Text>
      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Visualizar' />
    </Card>
    </View>
);

const App = () => {
    const renderItem = ({item})=>(
    <Item title={item.title} img={item.src} texto={item.texto}/>
    );
    return(
        <SafeAreaView>
        <FlatList data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </SafeAreaView>
    )
};

AppRegistry.registerComponent("Guia3",()=>App);
