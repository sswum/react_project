import { Routes, Route } from 'react-router-dom'; 
import loadable from '@loadable/Component';

const MainLayout = loadable(() => ('./layouts/MainLayout'));
const NotFound = loadable (()=> import ('./commons/pages/NotFound'));
const Main = loadable(()=> import ('./main/pages/Main'));



// 회원 페이지 S

const Join = loadable (()=> import('./member/pages/Join'));
const Login = loadable (()=> import('./member/pages/Login'));

// 회원 페이지 E

const App = () => {
return (
<Routes>
<Route path="/" element={<MainLayout />}>
<Route index element={<Main/>} />   /*메인페이지*/


{/* 회원페이지S */}

<Route path="member">
<Route path="join" element={<Join/>}/>
<Route path="login" element={<Login/>}/>

{/* 회원페이지 E */}
<Route path="*" element={<NotFound/>} />


</Route>
</Route>
</Routes>

);

};

export default App;