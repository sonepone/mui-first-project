import React from 'react';
import MainNavigation from './MainNavigation';
import AppContext from '../store/AppContext';

function Layout({ children }) {

  // dohvatam ono sto je smjesteno u context
  const appCtx = React.useContext(AppContext);

  // gledamo ima li cega smjestenog u context
  let trebaoBiBitiJedanClan = appCtx.someSharableArray[0];

  console.log(trebaoBiBitiJedanClan.nekiParam1);
  console.log(trebaoBiBitiJedanClan.nekiParam2);

  const promjeniParam1 = (event) => {appCtx.changeParam1("Nova vrijednost parametra1")};

  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
      {/* <button onClick={promjeniParam1}>Ja sam dugme i klikni me da se promjeni parametar1 </button> */}
    </div>
  );
}

export default Layout;
