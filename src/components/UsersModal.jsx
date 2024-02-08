import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, TextField } from '@material-ui/core';
import { USER_LIST } from '../utils/constants';

const UsersModal = ({ handleUsersInView }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 800, y: 400 });
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleUsersInView(USER_LIST, position.x, position.y, screenSize.width, screenSize.height);
  };

  useEffect(() => {

    window.addEventListener('resize', () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create User List
      </Button>
      {/* <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
          <h2>Modal</h2>
          <TextField
            label="Position"
            value={position}
            onChange={handlePositionChange}
          />
          <TextField
            label="Width"
            value={screenSize.width}
            onChange={handleScreenSizeChange('width')}
          />
          <TextField
            label="Height"
            value={screenSize.height}
            onChange={handleScreenSizeChange('height')}
          />
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close Modal
          </Button>
        </div>
      </Modal> */}

      <Modal open={open} onClose={handleClose}>
        <Box sx={
          {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 5
          }
        }>

          <h2>
            Current Position
          </h2>

          <TextField
            label="X"
            value={position.x}
            style={{ marginBottom: 20 }}
            type={'number'}
            onChange={e => setPosition({
              ...position,
              x: e.target.value
            })} />

          <TextField
            label="Y"
            value={position.y}
            style={{ marginBottom: 20 }}
            type={'number'}
            onChange={e => setPosition({
              ...position,
              y: e.target.value
            })} />



          <Button disabled={!position.x || !position.y} variant="contained" color="primary" onClick={handleClose}>
            Update User List
          </Button>

        </Box>
      </Modal>
    </div>
  );
}

export default UsersModal;