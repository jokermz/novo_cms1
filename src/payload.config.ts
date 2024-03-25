import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Administracao from './collections/Administracao'
import Jornalistas from './collections/Jornalistas'
import Categorias from './collections/Categorias'
import Conteudos from './collections/Conteudos'
import Midias from './collections/Midias'
import Filiais from './collections/Filiais'
import Paginas from './collections/Paginas'
import Layouts from './collections/Layouts'

// Custom Components
import Logo from './components/Logo'
import Icon from './components/Icon'

export default buildConfig({
  admin: {
    user: Jornalistas.slug,
    avatar: 'gravatar',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: 'SBCW Sistemas',
      favicon: '/assets/logo.jpg',
      ogImage: '/assets/logo.jpg',
    },
    components: {
      graphics: {
        Logo: Logo,
        Icon: Icon
      }
    },
    css: path.resolve(__dirname, './components/styles.css'),
  },
  editor: slateEditor({}),
  collections: [
    Administracao,
    Jornalistas,
    Categorias,
    Conteudos,
    Paginas,
    Midias,
    Filiais,
    Layouts
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})