import { CollectionConfig } from "payload/types";

export const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: "image",
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'body',
            type: 'richText',
            // editor: slateEditor({}),

        },

    ],
    upload: true

}