const models = require('./../models');
const errors = require('./../constants/error');
class Controller {
    constructor() {}
    async findAllInvoices(id = '') {
        try {
            const {
                Invoice,
                User,
                Item
            } = models;
            const result = await Invoice.findAll({
                include: [User, Item]
            });
            // console.log(result);
            const datas = result.map(({dataValues: data}) => {
                const prices = {
                    subTotal: 0,
                    totalPrice: 0
                }
                const items = data.Items.reduce((prev, item) => {
                    const {
                        id,
                        name,
                        price,
                        ItemInInvoice
                    } = item
                    prices.subTotal += price * ItemInInvoice.quantity
                    prev.push({
                        id,
                        name,
                        price,
                        quantity: ItemInInvoice.quantity
                    })
                    return prev;
                }, []);
                data.Items = items;
                data.subTotal = prices.subTotal;
                data.totalPrice = (prices.subTotal * (100 + data.tax) * (100 - data.discount)) / 10000.0
                return data;
            });
            return datas;
        } catch (err) {
            console.log(err)
            return errors.dbError;
        }
    }

    async findOneInvoice(id) {
        try {
            const {
                Invoice,
                User,
                Item
            } = models;
            const result = await Invoice.findOne({
                where: {
                    id
                },
                include: [User, Item]
            });
            const data = result.dataValues
            const prices = {
                subTotal: 0,
                totalPrice: 0
            }
            const items = data.Items.reduce((prev, item) => {
                const {
                    id,
                    name,
                    price,
                    ItemInInvoice
                } = item
                prices.subTotal += price * ItemInInvoice.quantity
                prev.push({
                    id,
                    name,
                    price,
                    quantity: ItemInInvoice.quantity
                })
                return prev;
            }, []);
            data.Items = items;
            data.subTotal = prices.subTotal;
            data.totalPrice = (prices.subTotal * (100 + data.tax) * (100 - data.discount)) / 10000.0
            return data;
        } catch (err) {
            console.log(err)
            return errors.dbError;
        }
    }

    buildInvoice(values){
        return models.Invoice.build(values);
    }
    async createInvoice(invoice, user, items, quantities){
        try{
            const createdUser = await user.save();
            const createItems = items.map((item)=>{
                return new Promise((resolve,reject)=>{
                    resolve(item.save())
                });
            });
            const createdItems = await Promise.all(createItems);
            const createdInvoice  = await this.buildInvoice({
                user_id: createdUser.id,
                tax: invoice.tax || 12.36,
                discount: invoice.discount || 10
            }).save();
            const createRels = createdItems.map((item, i)=>{
                const InvoiceId = createdInvoice.id;
                const relModel =  models.ItemInInvoice.build({
                    InvoiceId,
                    ItemId: item.id,
                    quantity: quantities[i]
                });
                return new Promise((res)=>res(relModel.save()));
            })
            const createdRels = Promise.all(createRels);
            return {success: true, msg: 'Invoice has been created'}

        }catch (err) {
            console.log(err)
            return errors.dbError;
        }
    }
    buildUser(values){
        return models.User.build(values)
    }
    buildItems(arrValues){
        return arrValues.map((values)=>{
            return models.Item.build(values)
        })
    }
}
module.exports = Controller;