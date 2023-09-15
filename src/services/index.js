const registerUserService = async ({userName, email, password}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BAKEND}/users/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({userName, email, password})
    });

    const json = await response.json();

if (!response.ok) {
    throw new Error(json.message);
}
};




export default registerUserService;