const express = require( 'express' );
const cors = require('cors');

//////<<<<<------------------------------------------------``

const app = express();

app.use( express.json() );

app.use( cors() );


///////////////////////////////////////////////////////////////////////


let PORT;

!process.env.PORT ? PORT = 4030 : PORT = process.env.PORT;


app.listen( PORT, () => 
{ console.log( `Servidor corriendo ${ PORT }` ) } );


/////////////////////////////////////////////////////////////////////


app.use( express.static( './public' ) );

app.use( "/api/product", require( './Routes/productRoute' ) );