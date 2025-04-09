import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import ImageLogo from '../../assets/images/CasaDoPassarinhoLogo.png'
import { useRouter } from 'expo-router';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image
        source={ImageLogo}
        style={{
          height: 200,
          width: 200,
          margin: 50
        }}
        resizeMode='contain'
      />
      <Text style={[styles.title, { color: theme.colors.text }]}>Bem Vindo</Text>
      <Text style={[styles.subTitle, { color: theme.colors.text }]}>Associação Educacional e Assistencial Casa do Passarinho (CPSA), 
        é uma organização Educacional, Cultural, Artístico, Esportivo e de Assistência Social, 
        como instrumento de promoção do ser humano, com sede e foro no Campo Limpo, cidade de São Paulo, 
        acolhendo algumas das regiões mais vulneráveis de São Paulo: Parque Arariba, Jardim Piracuama, Jardim Promorar, Jardim Umuarama, Capão Redondo e bairros próximos.</Text>

      <TouchableOpacity 
        style={[
          styles.firstButton, 
          { 
            backgroundColor: theme.colors.card, 
            borderColor: theme.colors.border,
            borderWidth: 1
          }
        ]}
        onPress={() => router.push('/quem-somos')}
      >
        <Text style={{ color: theme.colors.text }}>
          Quem Somos
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
      fontWeight: 'bold',
      height: 56,
      width: 100,
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