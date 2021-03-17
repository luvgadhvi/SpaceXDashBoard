import React, { useState } from 'react';
import { FiFilter, FiChevronDown } from "react-icons/fi";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../filterStyle.css';
import { connect } from 'react-redux';
import Actions from "../../../redux/actions";
function LaunchStatusComponent({ launch, setLaunchStatus }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const optionList = ['All Launches', 'Upcoming Launches', 'Successful Launches', 'Failed Launches']

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (index) => {
    setLaunchStatus(index, optionList[index])
    setAnchorEl(null);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };


  return (
    <div>
      <div
        className='filterIconContainer'
        onClick={handleClick}
      >
        <FiFilter className='filerIcon' />
        <div className='selectedOptions'
        >{optionList[launch.launchIndex]}</div>
        <FiChevronDown className='filerIcon'
        />
      </div>
      <Menu
        id="option-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {optionList.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === launch.launchIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
  
}

const mapStateToProps = (state) => {
  return {
    launch: state.launchStatus
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setLaunchStatus: (index, optionText) => {
      dispatch(Actions.setLaunchStatus(index, optionText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchStatusComponent);