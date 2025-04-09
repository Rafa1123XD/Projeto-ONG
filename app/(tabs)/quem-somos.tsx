import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import ImageLogo from '../../assets/images/CasaDoPassarinhoLogo.png'
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Quem somos</Text>
      <Image
        source={ImageLogo}
        style={{
          height: 200,
          width: 200,
          margin: 50
        }}
        resizeMode='contain'
      />
      <Text style={[styles.subTitle, { color: theme.colors.text }]}>Associação Educacional e Assistencial Casa do Passarinho (CPSA), é uma organização Educacional, Cultural, Artístico, Esportivo e de Assistência Social, 
        como instrumento de promoção do ser humano, com sede e foro no Campo Limpo, cidade de São Paulo, acolhendo algumas das regiões mais vulneráveis de São Paulo: 
        Parque Arariba, Jardim Piracuama, Jardim Promorar, Jardim Umuarama, Capão Redondo e bairros próximos. {'\n\n'}

        Fundada em 24 de Maio de 2009 para ser um espaço de recreação para crianças, jovens e idosos pertencentes a famílias de baixa renda, 
        onde os moradores são envolvidos em diversas atividades focadas na Educacional, Cultura e Assistência Social, tais como: {'\n\n'}

        Educação de Jovens e Adultos (MOVA) - Apoio Pedagógico a Crianças, Jovens e Adultos (Reforço) 
        - Fisioterapia - Informática - Musicoterapia - Odontologia - Apoio Social - Leve Leite - Aulas de Teatro - Danças - Música - Percussão - Ballet - 
        Inglês - Francês - Espanhol - Gastronomia - Filosofia - Consultas Médicas.{'\n\n'}

        Em nossa Casa oferecemos oportunidades hoje, erguido para o fomento do afeto, amor e sobretudo, da liberdade de pensamento.{'\n\n'}

        Missão: Promover e Criar por meio da educação da arte e da cultura o amor ao ser humano independentemente da sua raça, religião e condições sociais.{'\n\n'}

        Proporcionando por intermédio da educação a possibilidade do desenvolvimento social e intelectual, estimulando-as, à agirem conscientemente suprindo deste modo suas limitações.{'\n\n'}</Text>

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
        textAlign: 'center',
    },
    subTitle: {
      fontSize: 14,
      maxWidth: '74%',
      fontWeight: 'bold',
      textAlign: 'center',
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