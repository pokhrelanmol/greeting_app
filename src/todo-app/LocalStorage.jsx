import React, { useEffect } from 'react';


const LocalStorage = ({todos}) => {
	useEffect(() => {
		if (todos) {
	localStorage.setItem('todos', JSON.stringify(todos))
}

 },[todos])
	
return null
}
export default LocalStorage 