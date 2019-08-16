import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ArrowLeftCircleIcon from 'mdi-react/ArrowLeftCircleIcon';
import AccountForm from './AccountForm.jsx';
import UserUpdatedNotification from './UserUpdatedNotification';
import LightHeading from './general/styledComponents';
import colors from '../colors';

const AccountPageWrapper = styled.div`
  margin: 70px auto;
  width: 80%;
`

const AccountHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

const StyledLightHeading = styled(LightHeading)`
  margin: 0;
`

const BackBtnWrapper = styled.div`
  width: 30%;
  align-self: left;
`

const BackBtn = styled(Link)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.navIconHoverBg};
  }
  &:focus {
    outline: none;
  }
`

const EmptyDiv = styled.div`
  width: 30%;
`

const HeadingTextWrapper = styled.div`
  width: 30%;
`

const StyledArrowLeftIcon = styled(ArrowLeftCircleIcon)`
  fill: ${colors.fontLight};
`

const Account = (props) => {
  const {
    showUserUpdatedNotification
  } = props;

  return (
    <AccountPageWrapper>
      { showUserUpdatedNotification &&
        <UserUpdatedNotification />
      }
      <AccountHeadingWrapper>
        <BackBtnWrapper>
          <BackBtn to="/" >
            <StyledArrowLeftIcon />
          </BackBtn>
        </BackBtnWrapper>
        <HeadingTextWrapper>
          <StyledLightHeading id="accountHeading">Account</StyledLightHeading>
        </HeadingTextWrapper>
        <EmptyDiv></EmptyDiv>
      </AccountHeadingWrapper>
      <AccountForm />
    </AccountPageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    showUserUpdatedNotification: state.Ui.showUserUpdatedNotification,
  }
}

export default connect(mapStateToProps, null)(Account);
