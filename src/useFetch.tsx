import { Dispatch, SetStateAction, useEffect, useState } from "react";



const useFetch = (path: string) => {
    const [response, setresponse] = useState<[] | null>();
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(path, { signal: abortCont.signal })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                setisLoading(false);
                setError(false);
                setresponse(response);
            })
            .catch(() => {
                setisLoading(false);
                setError(true);
            });

        return () => abortCont.abort();

    }, [])
    return { response, isLoading, error }
}

// const useFetch = function<S>(path:string, forceFetch?: [S, Dispatch<SetStateAction<S>>]) {
//     const [response, setResponse] = useState<[] | null>();
//     const [isLoading, setisLoading] = useState(true);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         fetch(path)
//             .then((res) => {
//                 if (!res.ok) {
//                     console.log('COULD NOT FETCH THE response FROM THAT RESOURCE')
//                 }
//                 return res.json();
//             })
//             .then((response) => {
//                 setResponse(response); 
//                 setisLoading(false);
//                 setError(false);
//             })
//             .catch((err) => {
//                 setisLoading(false);
//                 setError(true)
//             })
//     }, forceFetch)
//     return { response, isLoading, error }
// }


 export default useFetch;