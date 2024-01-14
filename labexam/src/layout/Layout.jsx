import React,{Fragment} from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routers from '../router/Routers.jsx'

const Layout = () => {
  return (
        <Fragment>
        <Header/>
          <div>
            <Routers />
          </div>
        <Footer/>
        </Fragment>
  )
}

export default Layout