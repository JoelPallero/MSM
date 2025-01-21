import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Home () {
  return (
    <>
      <Header/>
      <div className="flex-container">
        <SideBar/>
        <div className="body-container">

        </div>
      </div>
    </>
  )
}

export default Home;