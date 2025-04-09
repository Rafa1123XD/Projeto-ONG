import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import ImageLogo from '../../assets/images/Doacao.jpg'
import { useRouter } from 'expo-router';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function QueroAjudarScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const router = useRouter();

  return (
    <View style={[styles.outerContainer, { backgroundColor: theme.colors.background }]}>
      <View style={styles.contentContainer}>
        <Image
          source={ImageLogo}
          style={{
            flex: 1,
            height: '40%',
          }}
          resizeMode='contain'
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>Faça sua doação...</Text>
          <Text style={[styles.subTitle, { color: theme.colors.text }]}>
            Para doar:{'\n'}
            Você pode doar roupas, alimentos, materiais de limpeza e higiene, bem como serviços voluntários, apoio, ideias e patrocínio.{'\n\n'}
            Envie um e-mail para: {'\n'}
            presidente@casadopassarinho.org.br{'\n'}
            contato@casadopassarinho.org.br {'\n\n'}
            Para nos auxiliar financeiramente seguem dados:{'\n'}
            PIX{'\n'}
            E-MAIL: pix@casadopassarinho.org.br (Banco do Brasil){'\n\n'}
            CNPJ: 20.428.360/0001-04 (PagBank){'\n\n'}
          </Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      padding: 10,
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 15,
    },
    subTitle: {
      fontSize: 14,
      fontWeight: 'normal',
      textAlign: 'left',
      lineHeight: 20,
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