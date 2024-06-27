import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/Main";
import { ShareedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <div>


<Routes>
<Route path="/" element={<ShareedLayout />}>

<Route path="/" element={<Main />} />


</Route>
</Routes>




    </div>
  );
}

export default App;
