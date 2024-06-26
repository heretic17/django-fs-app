
// API üzerinden(models), yazar için ayrı bi kanal oluştur. Yazar detaylarını içeren(isim, dob, ne zaman öldü vs...)

import { Props } from "../types";

function AuthorDetails({ details }: Props) {

    return (
        <>
        {details.map((detail, index) => 
          <p key={index}>{detail.author.name}</p>
        )}
        </>
    );
}

export default AuthorDetails;
