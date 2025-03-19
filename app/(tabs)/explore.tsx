import { StyleSheet, Image, Platform, View, Text, TouchableOpacity } from 'react-native';
import ImageLogo from '../../assets/Arrastão.avif'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={ImageLogo}
        style={{
          height: 200,
          width: 200,
          margin: 50
        }}
        resizeMode='contain'
      />
      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.subTitle}>O Projeto Arrastão é uma organização sem fins lucrativos que faz o acolhimento e dá suporte às famílias da região do Campo Limpo
         que vivem em situação de vulnerabilidade social.</Text>

      <TouchableOpacity style={styles.firstButton}>
        <Text>
          Conhecer
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
      fontSize: 14,
      maxWidth: '74%',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    firstButton: {
      height: 56,
      width: 100,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
    secondButton: {
      height: 64,
      width: 60,
      backgroundColor: '#55c7d4',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center'
    }
})