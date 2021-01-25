const { request, response } = require ( 'express' );
const dataBase = require( '../DataBase/connectDB' );


//////<<<<<------------------------------------------------``

const getCategories = async ( request, response = response ) =>
{

    try 
    {
        const sql = "SELECT * FROM category";

        dataBase.connection.query( sql, ( error, result ) => {

            if( error )
            {
                console.log( error );
            };

            if( result.length > 0 )
            {
                return response.status( 200 ).json( { ok : true, msg : 'Get category',  categories : result } );
            }
            else
            {
                return response.status( 400 ).json( { ok : false, msg : `Categories were not found` } );
            };

        });
    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };
}


const getProducts = async ( request, response = response ) =>
{

    try 
    {   

        const sql = "SELECT * FROM product";

        dataBase.connection.query( sql, ( error, result ) => {

            if( error )
            {
                console.log( error );
            };

            if( result.length > 0 )
            {
                return response.status( 200 ).json( { ok : true, msg : 'Get products',  products : result } );
            }
            else
            {
                return response.status( 400 ).json( { ok : false, msg : `Products were not found` } );
            };

        });

        //dataBase.connection.end();

        
    } 
    catch( error ) 
    {
       
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


const getProductsByValue = async ( request, response = response ) =>
{
    try 
    {
        const { searchValue } = request.body;

        const sql = "SELECT * FROM product";

        dataBase.connection.query( sql, ( error, result ) => {

            if( error )
            {
                console.log( error );
            };

            if( result.length > 0 )
            {

                const searchResult =  [ ...result.filter( ( product ) => product.name.toLowerCase().includes( searchValue.toLowerCase().trim() ) ) ];

                if( searchResult.length > 0)
                {
                    return response.status( 200 ).json( { ok : true, msg : 'Get products by value',  products : searchResult } );
                }
                else
                {
                    return response.status( 400 ).json( { ok : false, msg : `Products were not found` } );
                };
                
            };

        });
    } 
    catch( error ) 
    {
             
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };
}

//////---------------------------------------------->>>>>

module.exports = { getCategories, getProducts, getProductsByValue };