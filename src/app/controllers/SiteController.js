const component = require('../models/components');
const {multipleMongooseToObject}=require('../../util/mongoose');
const bill= require('../models/bills')

class SiteController{
    
    index(req,res,next){
        component.find({})
            .then(components => {
                res.render('home',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }

    module(req,res,next){
        component.find({type:"Module"})
            .then(components => {
                res.render('module',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    dongho(req,res,next){
        component.find({type:"Đồng hồ,thiết bị đo lường"})
            .then(components => {
                res.render('dongho',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    matcd(req,res,next){
        component.find({type:"Mắt CD"})
            .then(components => {
                res.render('matcd',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    phantan(req,res,next){
        component.find({type:"Phân tần"})
            .then(components => {
                res.render('phantan',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    transistors(req,res,next){
        component.find({type:"Transistors"})
            .then(components => {
                res.render('transistors',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    mosfets(req,res,next){
        component.find({type:"Mosfets"})
            .then(components => {
                res.render('mosfets',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    tudien(req,res,next){
        component.find({type:"Tụ điện"})
            .then(components => {
                res.render('tudien',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    dientro(req,res,next){
        component.find({type:"Điện trở"})
            .then(components => {
                res.render('dientro',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    diode(req,res,next){
        component.find({type:"Diode"})
            .then(components => {
                res.render('diode',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    jfet(req,res,next){
        component.find({type:"Jfet"})
            .then(components => {
                res.render('jfet',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    igbt(req,res,next){
        component.find({type:"IGBT"})
            .then(components => {
                res.render('igbt',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }

    pay(req,res,next){
        //res.render('pay');
        var lenghv=req.query.q.length 
        var lenghu=lenghv-1
        var varu=req.query.q[lenghu]
        res.render('pay',{varu})
    }
    store(req,res,next){
        //res.json(req.body);
        const bil = new bill(req.body);
        bil.save();
        res.render('thank')
    }

    search(req,res,next) {
        component.find( { $text: { $search: req.query.q } } )
            .then(components => {
                res.render('search',{components:multipleMongooseToObject(components) })})
            .catch(next);
    }
    gioithieu(req,res){
        res.render('gioi-thieu');
    }
    huongdan(req,res){
        res.render('huongdan');
    }
    datmualinhkien(req,res){
        res.render('datmualinhkien');
    }
    datmachin(req,res){
        res.render('datmachin')
    }
    thietkemachin(req,res){
        res.render('thietkemachin');
    }
}
module.exports = new SiteController;