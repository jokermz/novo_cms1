import { CollectionConfig } from 'payload/types'

const Administracao: CollectionConfig = {
    slug: 'administracao',
    auth: true,
    admin: {
        useAsTitle: 'name',
    },
    fields: [
    // Add more fields as needed
    ],
}
export default Administracao