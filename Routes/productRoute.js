const { Router } = require( 'express' );
const router = Router();
const { getCategories, getProducts, getProductsByValue } = require('../Control/productControl');
const { ValidatorMidd } = require('../Middleware/validadorDatos');
const { check } = require( 'express-validator' );


//////<<<<<------------------------------------------------``

router.get( '/categories', [], getCategories );


router.get( '/products', [], getProducts );


router.post( 
    
    '/products', 
    [
        check( 'searchValue','Search value is required' ).notEmpty(),
        ValidatorMidd
    ], 
    getProductsByValue 
);


//////---------------------------------------------->>>>>


module.exports = router;