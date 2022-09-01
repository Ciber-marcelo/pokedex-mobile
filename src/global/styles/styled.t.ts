import 'styled-components'

import theme from './theme'

//referencia de tipo, mais detalhes na primeira aula
declare module 'styled-components' {
   type ThemeType = typeof theme

   export interface DefaultTheme extends ThemeType{}
}

