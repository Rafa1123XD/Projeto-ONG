import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function ServicosProjetosScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (


    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Serviços e Projetos{'\n\n'}</Text>
      <Text style={[styles.subTitle, { color: theme.colors.text }]}>
        É um serviço que oferta acolhimento provisório para pessoas adultas, em situação de rua, a partir dos 18 anos, respeitando suas condições sociais e diferenças de origem.{'\n\n'}

        Tem o objetivo de acolher a pessoa em situação de rua, oferecendo proteção integral, escuta e condições para o fortalecimento de sua autonomia, contribuindo para o seu protagonismo e possível superação da situação de rua.{'\n\n'}

        Buca-se oferece proteção e atendimento integral às mulheres em situação de violência doméstica e familiar de gênero que estejam em risco iminente de morte, acompanhadas ou não de seus filhos com idade abaixo de 18 anos. O objetivo é garantir a integridade física e psicológica da vítima, além de oferecer apoio para que ela reestruture sua vida. {'\n\n'}
      </Text>
    </View>







  );
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