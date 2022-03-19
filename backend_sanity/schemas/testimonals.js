export default {
    name: 'testimonals',
    type: 'document',
    title: 'Testimonals',
    fields: [
        {
         name: 'name',
         title: 'Name',
         type: 'string',
        },
        {
         name: 'company',
         title: 'Company',
         type: 'string',
        },
        {
         name: 'imageurl',
         title: 'ImgURL',
         type: 'image',
         options: {
             hotstop: true,
         }
        },
        {
         name: 'feedback',
         title: 'Feedback',
         type: 'string',
        }
    ]
}