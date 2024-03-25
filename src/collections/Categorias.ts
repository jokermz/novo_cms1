import { CollectionConfig } from 'payload/types'

const Categorias: CollectionConfig = {
  slug: 'categorias',
  auth: true,
  admin: {
    useAsTitle: 'nome_categoria',
  },
  fields: [
    {
      name: 'id_filial',
      label: 'ID da Filial',
      type: 'relationship',
      relationTo: 'filiais',
      required: true,
    },
    {
      name: 'nome_categoria',
      label: 'Nome da Categoria',
      type: 'text',
      required: true,
    },
    {
      name: 'slug_categoria',
      label: 'Slug da Categoria',
      type: 'text',
      required: true,
    },
    {
      name: 'menu_principal',
      label: 'Menu Principal',
      type: 'checkbox',
      required: true,
    },
  ],
}

export default Categorias

