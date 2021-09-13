import parseError from "./parseError";

const axios = require("axios").default;

/**
 *
 * @param {any} dataObject
 * @returns Promise<{ isError : boolean; data?: { message : { data : any }}; errorMessage ?: string}>
 */

export const fetchApi = async (dataObject, method, url) => {
  try {
    const { data } = await axios({
      method: method,

      url,

      data: dataObject,

      timeout : 60000
    });

    return { isError: false, data };
  } catch (error) {
    return parseError(error);
  }
};
