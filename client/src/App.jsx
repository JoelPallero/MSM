import Header from './components/Header';
import SideBar from './components/SideBar';


function App() {

  return (
    <>
      <Header/>
      <div className="flex-container">        
        <SideBar
          menuType="mainMember"
          routes={routesConfig}
          classMenu="main-menu"
          onClose={onClose}
        />
        <div className="body-container">

        </div>
      </div>
    </>
  )
}

export default App