const router = require('express').Router();
const Controller = require('./../controllers/controller');

const controller = new Controller();

router.get('/', function(req,res){
    controller.findAllInvoices()
    .then((data)=>{
        res.json(data)
    });
});

router.post('/create', function(req,res){
    const { userData, arrItemsData, tax, discount } = req.body;
    try{
        const user = controller.buildUser(userData);
        const quantities = [];
        arrItemsData.forEach((itemData, i) => {
            quantities.push(itemData.quantity)
            delete arrItemsData[i].quantity;
        });
        const items =controller.buildItems(arrItemsData);
        controller.createInvoice({
                tax,
                discount
            },user,items,quantities)
        .then(result=>{
            res.json(result)
        });
    }catch(err){
        res.json(err);
    }
});

router.get('/:id', function(req,res){
    controller.findOneInvoice(req.params.id)
    .then((data)=>{
        res.json(data)
    });
});


module.exports = router;