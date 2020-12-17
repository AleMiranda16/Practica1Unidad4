import React, { useContext} from "react";
import { View, Picker, StyleSheet,Text , ScrollView} from "react-native";
import {ListItem} from 'react-native-elements';
import {AlumnosContext} from '../Context/AlumnosContext';

const Consulta = () => {
    const {setListaSelected,listaSelected,addSelect} = useContext(AlumnosContext);
    return (
        <View style={styles.container}>
           <View style={styles.container}>
            <Picker
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => addSelect(itemValue)}
            >
                <Picker.Item label="Temporada" value="" />
                <Picker.Item label="Primavera" value="Primavera" />
                <Picker.Item label="Verano" value="Verano" />
                <Picker.Item label="Otoño" value="Otoño" />
                <Picker.Item label="Invierno" value="Invierno" />
            </Picker>
            </View>
            <ScrollView>
        {
            listaSelected.length>0
            ?
            listaSelected.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.id}</ListItem.Title>
                        <ListItem.Subtitle>{a.descripcion}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay prendas</Text>


        }


        </ScrollView>
        </View>
    )
}

export default Consulta

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });
  