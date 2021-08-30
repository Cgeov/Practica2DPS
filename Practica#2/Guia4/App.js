import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';


export default function App() {
  const [Nombre, setNombre] = useState("");
  const [SaldoB, setSaldoB] = useState(0);
  const [ISSS, setISSS] = useState(0);
  const [AFP, setAFP] = useState(0);
  const [Renta, setRenta] = useState(0);
  const [Deduc, setDeducciones] = useState(0);

  function operaciones(valor1){
    setISSS(valor1*0.03);
    setAFP(valor1*0.04);
    setRenta(valor1*0.05);
    setDeducciones(ISSS+AFP+Renta)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Salario Neto</Text>
      <TextInput style={styles.TextInput} placeholder='Nombre' keyboardType='default' onChangeText={(Nombre)=>setNombre(Nombre)}/>
      <TextInput style={styles.TextInput} placeholder='Salario Base' keyboardType='numeric' onChangeText={(SaldoB)=>setSaldoB(SaldoB)}/>

      <TouchableOpacity  style={styles.boton} onPress={()=>{operaciones(SaldoB)}}>
        <Text style={{color:'white',fontSize:24,textAlign:'center'}}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.texto}>Nombre: {Nombre}</Text>
        <Text style={styles.texto}>Salario Base: {SaldoB}</Text>
        <Text style={styles.texto}>ISSS: {ISSS}</Text>
        <Text style={styles.texto}>AFP: {AFP}</Text>
        <Text style={styles.texto}>Renta: {Renta}</Text>
        <Text style={styles.texto}>Deducciones: {Deduc}</Text>
        <Text style={styles.texto}>Salario Neto: {SaldoB - Deduc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343F3E'
  },
  texto:{
    marginTop:20,
    fontSize: 25,
    color:'#ffffff',
  },
  titulo:{
    padding:15, 
    backgroundColor:'#8F91A2', 
    borderRadius:12,
    fontSize:20,
    color:'#DCEDFF'
  },
  boton:{
    marginTop:30,
    padding:10, 
    backgroundColor:'#94B0DA', 
    borderRadius:12,
    fontSize:20,
    color:'#DCEDFF',
    width: 130,
  },
  TextInput:{
    borderWidth:2,
    padding:5,
    borderColor:'#8F91A2',
    marginTop:20,
    backgroundColor:'#505A5B',
    color: '#DCEDFF',
    width: 350,
  },
  combobox:{
    borderWidth:2,
    padding:5,
    borderColor:'#8F91A2',
    marginTop:20,
    backgroundColor:'#505A5B',
    color: '#DCEDFF',
    width: 350,
  }
});

