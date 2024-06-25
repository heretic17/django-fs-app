import { useEffect, useState } from "react";
import axios from "axios";

/*
API üzerinden(models), yazar için ayrı bi kanal oluştur. Yazar detaylarını içeren(isim, dob, ne zaman öldü vs...)
*/

function AuthorDetails() {
    const [fetch, setFetch] = useState()

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/index/")
          .then(res => {
            console.log(res);
            setFetch(res.data);
          })
          .catch(error => {
            console.error(error);
          });
    }, []);

    return (
        <>
            {/* <p>{fetch.data[0].name}</p> */}
        </>
    );
}

export default AuthorDetails;
