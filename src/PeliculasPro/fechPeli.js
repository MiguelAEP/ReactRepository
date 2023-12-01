const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGYxN2ZiNmU3NmM4NGE4NzRlMjdkMDU3ZWQyMzIwYyIsInN1YiI6IjY0NTE0NzNiMmI1MzFkMDBlNDk2MTJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4C2ZX-KCwoTXMGZvdeRT7uG4jqgSXAi_34OCt5TaFcY'
export const fetchPeli = async (URL) => {

    const respuesta = await fetch(`${URL}`, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'content-type': 'application/json'
        }
    })
    const resultado = await respuesta.json()
    return resultado
}