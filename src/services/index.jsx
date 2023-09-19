export const registerUserService = async ({userName, email, password}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users/register`, {
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

export const loginUserService = async ({ email, password }) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json.token;
  };
  
  export const getMyUserDataService = async ({token}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users`,{
      headers: {
        Authorization: token
      },
    });

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json.data;
  };
  