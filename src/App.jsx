

import { AppRouter } from "./router/AppRouter";
import './styles/app.css'
import { MyProfile, NavBar } from "./components";


function App() {

  return (
    <div className="containerApp">
      <div className="containerCard">
        <div className="cardd">
          <MyProfile />
          <AppRouter/>
        </div>
        <NavBar />
      </div>
    </div>
  )
}

export default App
