const INTIAL_STATE= { invoice_list: [] }
export default function(state = INTIAL_STATE, action){
    action.type = typeof action.type === "string" && action.type.indexOf('@@redux/INIT')>=0?0:1
    switch(action.type){
        case 0:
        return [
            {
                id: 1111,
                items:{
                    count: 5,
                    total_price:'3104',
                    items: []
                },
                user:{
                    name: 'John Doe'
                },
                created_time: '2:23PM Today',
                updated_time: ''
            },
            {
                id: 1112,
                items:{
                    count: 5,
                    total_price: '3104',
                    items: []
                },
                user:{
                    name: null
                },
                created_time: '2:23PM Today',
                updated_time: ''
            },
            {
                id: 1113,
                items:{
                    count: 5,
                    total_price: '3104',
                    items: []
                },
                user:{
                    name: 'John Doe'
                },
                created_time: '2:23PM Today',
                updated_time: ''
            },
            {
                id: 1114,
                items:{
                    count: 5,
                    total_price: '3104',
                    items: []
                },
                user:{
                    name: 'John Doe'
                },
                created_time: '2:23PM Today',
                updated_time: ''
            }
        ]
        case 1:
        return {
            id: 1114,
            tax: 12.36,
            discount: 10,
            total_price: 609,
            sub_total: 600,
            items:{
                count: 3,
                items: [{
                    name: 'item 1',
                    quantity:2,
                    price: 100
                },
                {
                    name: 'item 2',
                    quantity:2,
                    price: 100
                },{
                    name: 'item 3',
                    quantity:2,
                    price: 100
                }]
            },
            user:{
                name: 'John Doe',
                email: 'johndoe@isp.com'
            },
            created_time: '2:23PM Today',
            updated_time: ''
        }
    }
    return state;
}