import {createContext} from 'react';

// U componenti "Layout" sam dao mali primjer kako se koristi context;
// u svakoj drugoj komponenti koja je u hijerarhiji nize moze se context
// koristiti na slican nacin.
// U komponenti AppContextProvider sam dodavao objekte i metode u contekst
const AppContext = createContext(
    // to kako izgleda context ce se definitivno siriti
    {
        someSharableArray: []
    }
);

export default AppContext;