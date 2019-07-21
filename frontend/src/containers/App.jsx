import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer.jsx';
import LoginOrRegister from '../components/LoginOrRegister.jsx';
import Products from '../components/Products.jsx';
import LoggedIn from '../components/LoggedIn.jsx';
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
  color: white;
  font-weight: bold;
`

const MainContent = styled.div`
  padding-bottom: 160px;
  min-height: 100vh;
`

class App extends Component {
  render() {
    const userLoggedIn = this.props.isLoggedIn;
    return (
      <AppWrapper>
      <GlobalStyle />
        <TopBar>
          <TopBarSection1>
            <ShopName>Webshop</ShopName>
          </TopBarSection1>
          <TopBarSection2>
            {
              userLoggedIn &&
              <LoggedIn />
            }
          </TopBarSection2>
        </TopBar>
        <MainContent>
          { userLoggedIn ? (
              <Products />
            ) : (
              <LoginOrRegister />
            )
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
  }
}

//export default App
export default connect(mapStateToProps, null)(App);
