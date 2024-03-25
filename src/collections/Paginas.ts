import { CollectionConfig } from 'payload/types'

const Paginas: CollectionConfig = {
  slug: 'paginas',
  auth: true,
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    {
      name: 'id_filial',
      label: 'ID Filial',
      type: 'relationship',
      relationTo: 'filiais',
      required: true
    },
    {
      name: 'titulo',
      label: 'Título',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true
    },
    {
      name: 'conteudo',
      label: 'Conteúdo',
      type: 'textarea',
      required: true
    },
    /*{
      name: 'foto_pagina',
      label: 'Foto da Página',
      type: 'upload',
      relationTo: 'filiais',
      required: true
    },*/
    {
      name: 'exibir_topo',
      label: 'Exibir no Topo',
      type: 'checkbox',
      required: true
    },
    {
      name: 'exibir_menu',
      label: 'Exibir no Menu',
      type: 'checkbox',
      required: true
    },
    {
      name: 'exibir_footer',
      label: 'Exibir no Rodapé',
      type: 'checkbox',
      required: true
    }
  ],
}

export default Paginas
