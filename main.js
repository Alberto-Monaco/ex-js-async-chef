//? Esercizio
// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

//* Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

//? Esempio di utilizzo
// getChefBirthday(1)
//   .then(birthday => console.log("Data di nascita dello chef:", birthday))
//   .catch(error => console.error("Errore:", error.message));

//! Esempio di output atteso
// Data di nascita dello chef: 1990-06-15

// Funzione asincrona che prende l'ID della ricetta come parametro
async function getChefBirthday(id) {
	// Recupera i dati della ricetta dall'API
	const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
	const recipe = await recipeResponse.json()
	console.log(recipe) // Log della ricetta per debug

	// Recupera i dati dello chef usando l'userId della ricetta
	const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
	const chef = await chefResponse.json()
	console.log(chef) // Log dello chef per debug

	// Restituisce la data di nascita dello chef
	return chef.birthDate
}

// asincrona per testare la funzione
;(async () => {
	try {
		// Chiama la funzione con ID 1 e attende il risultato
		const birthday = await getChefBirthday(1)
		console.log('Data di nascita dello chef:', birthday)
	} catch (error) {
		// Gestisce eventuali errori
		console.error('Errore:', error.message)
	}
})()
