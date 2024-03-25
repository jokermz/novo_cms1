import { CollectionConfig } from 'payload/types'

import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'

const Jornalistas: CollectionConfig = {
  slug: 'jornalistas',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Apenas admins podem cadastrar jornalistas
    create: isAdmin,
    // Admins podem accessar todos, jornalistas podem apenas acessar o proprio perfil
    read: isAdminOrSelf,
    // Admins podem atualizar todos perfis, jornalistas podem apenas atualizar o proprio perfil
    update: isAdminOrSelf,
    // Apenas admins podem deletar jornalistas
    delete: isAdmin,
  },
  fields: [
    {
      name: 'nome',
      type: 'text',
      label: 'Nome Completo',
      required: true,
      admin: {
        position: 'sidebar',
      },
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
    },
    {
      name: 'telefone',
      type: 'text',
      required: true,
      label: 'Telefone',
      admin: {
        position: 'sidebar',
      },
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
    },
    {
      name: 'CPF',
      type: 'text',
      required: true,
      label: 'CPF',
      admin: {
        position: 'sidebar',
      },
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
    },
    {
      name: 'data_de_nascimento',
      type: 'date',
      required: true,
      label: 'Data de Nascimento',
      admin: {
        position: 'sidebar',
      },
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
    },
    {
      name: 'estado',
      type: 'select',
      label: 'Estado',
      required: true,
      options: [
        {
          label: "Acre (AC)",
          value: "acre"
        },
        {
          label: "Alagoas (AL)",
          value: "alagoas"
        },
        {
          label: "Amapá (AP)",
          value: "amapa"
        },
      ],
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
    },
    {
      name: 'role',
      saveToJWT: true,
      type: 'select',
      label: 'Função',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Jornalista', value: 'jornalista' },
      ],
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
      required: true,
      defaultValue: 'jornalista',
    },
    {
      name: 'filial',
      type: 'relationship',
      label: 'Filial',
      relationTo: 'filiais',
      hasMany: false,
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      }
    },
    {
      name: 'foto',
      type: 'upload',
      relationTo: 'midias', 
      required: false,
      label: 'Foto de Perfil',
      admin: {
        position: 'sidebar',
      }
    }
  ]
}

export default Jornalistas
