/**
 *
 * @param { import("axios").AxiosError } errorObject
 */

const returnValue = errorMessage => {
    return {isError: true, errorMessage};
};

const parseError = errorObject => {
    const {request, response, message} = errorObject;

    if (response) {
        if (response?.data) {
            const {data: {
                    message
                }} = response;

            return returnValue(message);
        }

        return returnValue(response.statusText);
    } else if (request) {
        const statusCodeForNoInternet = 0;

        const {status, statusText: errorMessage} = request;

        if (status === statusCodeForNoInternet) {
            return returnValue("Seems you are not connected to the internet, refresh your browser");
        }

        return returnValue(errorMessage);
    } else {
        return returnValue(message);
    }

    // return "Error Occured";
};

export default parseError;
