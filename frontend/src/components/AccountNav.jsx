import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DotsVerticalIcon from 'mdi-react/DotsVerticalIcon';
import { toggleMenuModalAction } from '../redux/actions/ui';
import MenuModal from './MenuModal.jsx';
import colors from '../colors';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const EmptyDiv1 = styled.div`
  width: 60%;
  @media (min-width: 490px) {
    width: 50%;
  }
`

const EmptyDiv2 = styled.div`
  width: 40px
`

const ShowMenuModalBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.navIconHoverBg};
  }
  &:hover #dotsIcon {
    fill: ${colors.fontDark};
  }
  &:focus {
    outline: none;
  }
`


const StyledDotsIcon = styled(DotsVerticalIcon)`
  fill: ${colors.primaryLight};
`

const AccountNav = (props) => {
  const {
    showMenuModal,
    toggleMenuModal
  } = props;

  return (
    <Div>
      <EmptyDiv1 />
      <EmptyDiv2 />
      <ShowMenuModalBtn onClick={toggleMenuModal} id="showMenuModalBtn">
        <StyledDotsIcon id="dotsIcon" />
      </ShowMenuModalBtn>
      { showMenuModal &&
        <MenuModal />
      }
    </Div>
  );
}

const mapStateToProps = (state) => {
  return {
    showMenuModal: state.Ui.showMenuModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuModal: () => {
      dispatch(toggleMenuModalAction())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountNav);
