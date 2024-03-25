import { CollectionConfig } from 'payload/types'

const Conteudos: CollectionConfig = {
  slug: 'conteudos',
  auth: true,
  admin: {
    useAsTitle: 'titulo_conteudo',
  },
  fields: [
    {
      name: 'id_filial',
      type: 'number',
      required: true,
    },
    {
      name: 'id_categoria',
      type: 'number',
      required: true,
    },
    {
      name: 'id_subcategoria',
      type: 'number',
      required: true,
    },
    {
      name: 'data_cadastro',
      type: 'date',
      required: true,
    },
    {
      name: 'data_hora_cadastro',
      type: 'text',
      required: true,
    },
    {
      name: 'destaque',
      type: 'text',
      required: true,
    },
    {
      name: 'global_scroll',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'previa',
      type: 'richText',
      required: true,
    },
    {
      name: 'titulo_conteudo',
      type: 'text',
      required: true,
    },
    {
      name: 'slug_titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitulo_conteudo',
      type: 'text',
      required: true,
    },
    {
      name: 'parceiro_id',
      type: 'number',
      required: true,
    },
    {
      name: 'autor_conteudo',
      type: 'text',
      required: true,
    },
    {
      name: 'autorfoto_conteudo',
      type: 'text',
      required: true,
    },
    {
      name: 'legendafoto_conteudo',
      type: 'text',
      required: true,
    },
    {
      name: 'conteudo',
      type: 'richText',
    },
    {
      name: 'video_conteudo',
      type: 'richText',
      required: true,
    },
    {
      name: 'ativo',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'bloqueado',
      type: 'number',
      required: true,
    },
    {
      name: 'vizualizacao',
      type: 'number',
      required: true,
    },
    {
      name: 'foto_conteudo',
      type: 'text',
      required: true,
    },
    {
      name: 'date_atualizado',
      type: 'date',
      required: true,
    },
  ],
}

export default Conteudos
