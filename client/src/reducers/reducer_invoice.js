const INTIAL_STATE= { invoice_list: [] }
export default function(state = INTIAL_STATE, action){
    return [
            {
                id: 1,
                name: 'Name',
                Desc: 'Desc'
            },
            {
                id: 2,
                name: 'Name',
                Desc: 'Desc'
            },
            {
                id: 3,
                name: 'Name',
                Desc: 'Desc'
            },
            {
                id: 4,
                name: 'Name',
                Desc: 'Desc'
            }
        ]
}