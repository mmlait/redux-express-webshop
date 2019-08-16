import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer.jsx';
import LoginOrRegister from '../components/LoginOrRegister.jsx';
import Products from '../components/Products.jsx';
import ProductsNav from '../components/ProductsNav.jsx';
import Account from '../components/Account.jsx';
import AccountNav from '../components/AccountNav.jsx';
import Modal from '../components/Modal.jsx';
import CustomNotification from '../components/CustomNotification.jsx';
import ErrorNotification from '../components/ErrorNotification';
import colors from '../colors';
import '../index.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Segoe UI", "Helvetica Neue";
  }

  body {
    background-color: ${colors.appBg};
    background-image: url('/images/guitar.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    @media (min-width: 1000px) {
      background-size: 85%;
    }
    @media (min-width: 1900px) {
      background-size: 70%;
    }
`

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`

const TopBar = styled.nav`
  background-color: ${colors.primary};
  color: ${colors.fontLight};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50px;
  text-align: center;
  margin: 0 auto;
  align-items: center;
`

const TopBarSection1 = styled.div`
  flex-basis: 30%;
`

const TopBarSection2 = styled.div`
  flex-basis: 70%;
`

const ShopName = styled.p`
  color: ${colors.fontLight};
  font-weight: bold;
`

const MainContent = styled.div`
  padding-bottom: 160px;
  min-height: 100vh;
`

class App extends Component {
  render() {
    const {
      isLoggedIn,
      showCustomNotificationModal,
      showErrorNotification,
    } = this.props;
    
    return (
      <AppWrapper>
      <GlobalStyle />
        <TopBar>
          <TopBarSection1>
            <ShopName>Webshop</ShopName>
          </TopBarSection1>
          <TopBarSection2>
            { isLoggedIn &&
              <Switch>
                <Route exact path='/' component={ProductsNav}/>
                <Route path='/account' component={AccountNav}/>
              </Switch>
            }
          </TopBarSection2>
        </TopBar>
        <MainContent>
          { isLoggedIn ? (
              <Switch>
                <Route exact path='/' component={Products}/>
                <Route path='/account' component={Account}/>
              </Switch>
            ) : (
              <Route exact path='/' component={LoginOrRegister}/>
            )
          }
          { showCustomNotificationModal &&
            <Modal content={
              <CustomNotification />
            }/>
          }
          { showErrorNotification &&
            <Modal content={
              <ErrorNotification />
            }/>
          }
        </MainContent>
        <Footer />
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.User.isLoggedIn,
    showCustomNotificationModal: state.Ui.showCustomNotificationModal,
    showErrorNotification: state.Ui.showErrorNotification
  }
}

//export default App
export default connect(mapStateToProps, null)(App);
