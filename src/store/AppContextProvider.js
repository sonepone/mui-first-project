import AppContext from "./AppContext";
import {useState} from 'react';

function AppContextProvider({children})
{
    const someObject = {
        nekiParam1: "Sone 1 - probica",
        nekiParam2: "Sone 2 - mali test"
    }

    const [someCtxObject, setSomeCtxObject] = useState(someObject);

    const changeParam1 = (newParam1Value) => {
       setSomeCtxObject( (prevCtxObject) => { 
          return {...prevCtxObject,
          nekiParam1: newParam1Value}} );
    };

    const appCtxValue = {
        someSharableArray: [someCtxObject],
        changeParam1: changeParam1
    }


    return (
        <AppContext.Provider value={appCtxValue}>
            {children}
        </AppContext.Provider>
    );
}



export default AppContextProvider;