import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Msg({ uid }){
  return <span>{uid}</span>;
}

const Test = () => {

  const notify = () => {
    toast(<Msg uid={"this is a uid for real"} />, {
      onOpen: ({ uid }) => window.alert(uid),
      onClose: ({ uid }) => window.alert(uid)
    });

  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
}
}

export default Test