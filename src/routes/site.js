const express = require('express');
const router= express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/gioi-thieu',siteController.gioithieu);
router.get('/huong-dan',siteController.huongdan);
router.get('/dat-mua-linh-kien',siteController.datmualinhkien);
router.get('/dat-mach-in',siteController.datmachin);
router.get('/thiet-ke-mach-in',siteController.thietkemachin);
router.get('/pay',siteController.pay);
router.post('/store',siteController.store);
router.get('/search',siteController.search);
router.get('/module',siteController.module);
router.get('/dongho',siteController.dongho);
router.get('/matcd',siteController.matcd);
router.get('/phantan',siteController.phantan);
router.get('/transistors',siteController.transistors);
router.get('/mosfets',siteController.mosfets);
router.get('/tudien',siteController.tudien);
router.get('/dientro',siteController.dientro);
router.get('/diode',siteController.diode);
router.get('/jfet',siteController.jfet);
router.get('/igbt',siteController.igbt);
router.get('/',siteController.index);

module.exports = router;