import { FETCH_INVOICE } from './constants'
import axios from 'axios'
import config from './../config/config'
export default function(invoiceList){
    const payload = [
        {
            "id": 1,
            "user_id": 1,
            "tax": 12.36,
            "discount": 10,
            "createdAt": "2018-07-24T16:20:49.000Z",
            "updatedAt": "2018-07-24T16:20:49.000Z",
            "User": {
                "id": 1,
                "name": "aritra",
                "email": "aritra@gmail.com",
                "pincode": null,
                "phone": null,
                "address": null
            },
            "Items": [
                {
                    "id": 1,
                    "name": "item 1",
                    "price": 100,
                    "quantity": 4
                },
                {
                    "id": 4,
                    "name": "item 4",
                    "price": 200,
                    "quantity": 2
                },
                {
                    "id": 3,
                    "name": "item 3",
                    "price": 100,
                    "quantity": 1
                }
            ],
            "subTotal": 900,
            "totalPrice": 910.116
        },
        {
            "id": 5,
            "user_id": 4,
            "tax": 12.36,
            "discount": 10,
            "createdAt": "2018-07-24T16:44:42.000Z",
            "updatedAt": "2018-07-24T16:44:42.000Z",
            "User": {
                "id": 4,
                "name": "user1",
                "email": "user1@user.com",
                "pincode": null,
                "phone": null,
                "address": null
            },
            "Items": [
                {
                    "id": 7,
                    "name": "Biriyani",
                    "price": 160,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "name": "Rezala",
                    "price": 110,
                    "quantity": 2
                }
            ],
            "subTotal": 380,
            "totalPrice": 384.2712
        },
        {
            "id": 7,
            "user_id": 6,
            "tax": 18,
            "discount": 10,
            "createdAt": "2018-07-24T17:37:44.000Z",
            "updatedAt": "2018-07-24T17:37:44.000Z",
            "User": {
                "id": 6,
                "name": "test1",
                "email": "test1@isp.org",
                "pincode": null,
                "phone": null,
                "address": null
            },
            "Items": [
                {
                    "id": 11,
                    "name": "Chicken",
                    "price": 100,
                    "quantity": 2
                },
                {
                    "id": 12,
                    "name": "Mutton",
                    "price": 120,
                    "quantity": 1
                }
            ],
            "subTotal": 320,
            "totalPrice": 339.84
        }
    ]
    return {
        type: FETCH_INVOICE,
        payload: axios(config.BASE_URL)
    }
}