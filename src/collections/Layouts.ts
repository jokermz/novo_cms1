import { CollectionConfig } from 'payload/types'

const Layouts: CollectionConfig = {
  slug: 'layouts',
  auth: true,
  admin: {
    useAsTitle: 'arquivo_layout',
  },
  fields: [
    {
      name: 'id_filial',
      label: 'ID da Filial',
      type: 'relationship',
      relationTo: 'filiais',
      required: true,
    },
    /*{
      name: 'arquivo_layout',
      label: 'Arquivo de Layout',
      type: 'upload',
      required: true,
    },*/
    {
      name: 'css_novo',
      label: 'CSS Novo',
      type: 'text',
      required: true,
    },
  ],
}

export default Layouts

