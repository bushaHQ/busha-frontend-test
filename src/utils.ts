import { BASE_URL } from "./constants";
export const getData = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // ON ERROR
    if (!response.ok) {
      const error = response.status;
      return Promise.reject(error);
    }

    // ON SUCCESS
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Can't fetch data`);
  }
};

export const addWallet = async (payload: any) => {
  try {
    const response = await fetch(`${BASE_URL}/accounts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // ON ERROR
    if (!response.ok) {
      const error = response.status;
      return Promise.reject(error);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to create wallet`);
  }
};

export const generateKey = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
