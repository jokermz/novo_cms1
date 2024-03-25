import { CollectionConfig } from 'payload/types'

const Midias: CollectionConfig = {
  slug: 'midias',
  auth: true,
  admin: {
    useAsTitle: 'nome',
  },
  fields: [
    {
      name: 'nome',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'text',
      required: true,
    },
    {
      name: 'arquivo',
      label: 'Arquivo',
      type: 'upload',
      relationTo: 'jornalistas',
      required: true,
    },
  ],
}

export default Midias
