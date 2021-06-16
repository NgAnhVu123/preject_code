const component = require('../models/components');
const {mongooseToObject}=require('../../util/mongoose');
const comment = require('../models/comments');
const {multipleMongooseToObject}=require('../../util/mongoose');


class ProductController{

    show(req,res,next){
        component.findOne({ slug: req.params.slug})
            .then(component=>{
                component=mongooseToObject(component);
                res.render('products/show',{component})
            })
            .catch(next);  
        }
}
module.exports = new ProductController;