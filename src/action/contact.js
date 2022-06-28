


export const postContacto = async (mail, name) => {

    let url = 'https://santiago-reyes.herokuapp.com/api/user'
 
    const post = await fetch(url, {
        method: 'POST',
        headers: {
            // 'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mail, name })
    });
    let resul = await post.json();
    return resul
}
export const postContactoAdmin = async (mail, name, message) => {

    let url = 'https://santiago-reyes.herokuapp.com/api/message'
   
    const post = await fetch(url, {
        method: 'POST',
        headers: {
            // 'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mail, name, message })
    });
    let resul = await post.json();
    return resul
}