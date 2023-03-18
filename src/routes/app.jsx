// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from '../containers/Layout';
// import Login from '../containers/Login';
// import RecoveryPassword from '../containers/RecoveryPassword';
// import '../styles/global.css';
// import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';
// import { Route } from 'react-router-dom';


// const App = () => {
// 	return (
// 		// <h1>Hola Mundo!Bienvenidos a este moco!!!</h1>
//         <BrowserRouter>
//             <Switch>
//                 <Layout>
//                     <Route exact path="/" element={Home} />
//                     <Route exact path="/login" element={Login} />
//                     <Route exact path="/recoverypassword" element={RecoveryPassword} />
//                     <Route element={NotFound} />
//                 </Layout>
//             </Switch>
//         </BrowserRouter>
// 	);
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
	return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />	
                <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter> 
	);
}

export default App;