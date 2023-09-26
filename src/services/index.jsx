export const registerUserService = async ({ userName, email, password }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, email, password }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.token;
};

export const changePasswordService = async ({ oldPassword, newPassword, token }) => {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      oldPass: oldPassword,
      newPass: newPassword
    })
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
}

export const SendEmailToRecoverPassword = async ({ email }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/users/password/recover`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email }),
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const RecoveryByEmailService = async ({ email, code, password }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/users/password/recover`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, code, password }),
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getAllLinksService = async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/links`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleLinkService = async ({ linkId }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/links/${linkId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const sendLinkService = async ({ data, token }) => {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/links`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserLinksService = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/mylinks`, {
    headers: {
      Authorization: `${token}`,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteLinkService = async ({ linkId, token }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/links/${linkId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const starRatingService = async (value, linkId, token) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/links/${linkId}/votes`,
    {
      method: "POST",
      body: value,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const filterService = async (sortBy, keyword) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BACKEND}/links?${sortBy}=votes&${keyword}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const uploadAvatar = async ({ imageFile, token }) => {
  const formData = new FormData();
  formData.append("avatar", imageFile);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BACKEND}/users/avatar`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json.data;
  } catch (error) {
    throw new Error(error);
  }
};
