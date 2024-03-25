import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Filiais: CollectionConfig = {
  slug: 'filiais',
  auth: false,
  admin: {
    useAsTitle: 'nome_da_filial',
  },
  access: {
    // Apenas admins podem cadastrar filiais
    create: isAdmin,
    // Apenas admins podem ver filiais
    read: isAdmin,
    // Apenas admins podem atualizar filiais
    update: isAdmin,
    // Apenas admins podem deletar filiais
    delete: isAdmin,
  },
  fields: [
    {
      name: 'data_cadastro',
      type: 'text',
      label: 'Data de Cadastro',
      required: true,
    },
    {
      name: 'estado',
      type: 'text',
      label: 'Estado',
      required: true,
    },
    {
      name: 'cidade',
      type: 'text',
      label: 'Cidade',
      required: true,
    },
    {
      name: 'tipo_pessoa',
      type: 'text',
      label: 'Tipo de Pessoa',
      required: false,
    },
    {
      name: 'tipo',
      type: 'text',
      label: 'Tipo',
      required: false,
    },
    {
      name: 'nome_da_filial',
      type: 'text',
      label: 'Nome da Filial',
      required: true,
    },
    {
      name: 'dominio',
      type: 'text',
      label: 'Domínio',
      required: true,
    },
    {
      name: 'nome_completo',
      type: 'text',
      label: 'Nome Completo',
      required: true,
    },
    {
      name: 'nome_profissional',
      type: 'text',
      label: 'Nome Profissional',
      required: false,
    },
    {
      name: 'rg',
      type: 'text',
      label: 'RG',
      required: false,
    },
    {
      name: 'cpf',
      type: 'text',
      label: 'CPF',
      required: true,
    },
    {
      name: 'cnpj',
      type: 'text',
      label: 'CNPJ',
      required: false,
    },
    {
      name: 'razao_social',
      type: 'text',
      label: 'Razão Social',
      required: false,
    },
    {
      name: 'nome_fantasia',
      type: 'text',
      label: 'Nome Fantasia',
      required: false,
    },
    {
      name: 'data_nascimento',
      type: 'text',
      label: 'Data de Nascimento',
      required: true,
    },
    {
      name: 'cidade_nascimento',
      type: 'text',
      label: 'Cidade de Nascimento',
      required: true,
    },
    {
      name: 'endereco',
      type: 'text',
      label: 'Endereço',
      required: true,
    },
    {
      name: 'numero',
      type: 'text',
      label: 'Número',
      required: true,
    },
    {
      name: 'cep',
      type: 'text',
      label: 'CEP',
      required: true,
    },
    {
      name: 'bairro',
      type: 'text',
      label: 'Bairro',
      required: true,
    },
    {
      name: 'telefone',
      type: 'text',
      label: 'Telefone',
      required: true,
    },
    {
      name: 'celular',
      type: 'text',
      label: 'Celular',
      required: true,
    },
    {
      name: 'facebook',
      type: 'text',
      label: 'Facebook',
      required: false,
    },
    {
      name: 'id_facebook',
      type: 'text',
      label: 'ID do Facebook',
      required: false,
    },
    {
      name: 'twitter',
      type: 'text',
      label: 'Twitter',
      required: false,
    },
    {
      name: 'analitico',
      type: 'textarea',
      label: 'Analítico',
      required: false,
    },
    {
      name: 'mapas',
      type: 'textarea',
      label: 'Mapas',
      required: false,
    },
    {
      name: 'email',
      type: 'text',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'cidade_pessoal',
      type: 'text',
      label: 'Cidade Pessoal',
      required: true,
    },
    {
      name: 'status_filial',
      type: 'checkbox',
      label: 'Status da Filial',
      required: true,
    },
    {
      name: 'perfil',
      type: 'textarea',
      label: 'Perfil',
      required: true,
    },
    {
      name: 'fundacao',
      type: 'text',
      label: 'Fundação',
      required: false,
    },
    /*{
      name: 'foto',
      type: 'upload',
      label: 'Foto',
      required: false,
    },*/
    {
      name: 'scripts_cabecalho',
      type: 'textarea',
      label: 'Scripts de Cabeçalho',
      required: false,
    },
  ],
}

export default Filiais
