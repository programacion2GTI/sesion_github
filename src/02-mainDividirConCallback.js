
//------------------------------------------------
// Diseño lógico de la función:
//
// dividendo:Numero 
// divisor: Numero
// 	->
// 	dividir () 
//	->
// Numero
//------------------------------------------------

//------------------------------------------------
// Implementación 1 del diseño
// ..........................
// el resultado se devuelve  con return
//------------------------------------------------
function dividir1( dividendo, divisor ) {
    if ( divisor == 0 ) {
	// No sé que devolver !
	// Debo avisar a main () del error
	// Aquí esta prohibido poner console.log()
	// Tampoco podemos asumir que hay
	// alguien mirando el programa
    }
    return dividendo / divisor
} // ()

//------------------------------------------------
// Implementación 2 del diseño
// ..........................
// el resultado se devuelve 
// mediante callback (err, resultado)
//------------------------------------------------
function dividir2( dividendo, divisor, callback ) {
    if ( divisor == 0 ) {
	callback( "division por 0", null)
	return
    }
    // else
    var resultado = dividendo/divisor
    callback( null, resultado )
} // ()

//------------------------------------------------
// main ()
//------------------------------------------------

//
//
//
var r = dividir1( 7, 2 )

console.log( r )

//
//
//
r = dividir1( 7, 0 )

console.log( r )

//
//
//
dividir2( 7, 2, function (error, resultado) {
	if (error != null) {
		console.log( "la division falló: " + error )
		return
	}

	console.log( " el resulado es: " + resultado )
})

//
//
//
dividir2( 7, 0, function (error, resultado) {
	if (error) {
		console.log( "la division falló: " + error )
		return
	}

	console.log( " el resulado es: " + resultado )
})
