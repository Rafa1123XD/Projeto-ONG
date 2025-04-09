/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `${'/(tabs)'}/quem-somos` | `/quem-somos`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/serviços e projetos` | `/serviços e projetos`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/quero ajudar` | `/quero ajudar`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `${'/(tabs)'}/quem-somos` | `/quem-somos`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/serviços e projetos` | `/serviços e projetos`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/quero ajudar` | `/quero ajudar`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `${'/(tabs)'}/quem-somos${`?${string}` | `#${string}` | ''}` | `/quem-somos${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/serviços e projetos${`?${string}` | `#${string}` | ''}` | `/serviços e projetos${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/quero ajudar${`?${string}` | `#${string}` | ''}` | `/quero ajudar${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `${'/(tabs)'}/quem-somos` | `/quem-somos`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/serviços e projetos` | `/serviços e projetos`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/quero ajudar` | `/quero ajudar`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
