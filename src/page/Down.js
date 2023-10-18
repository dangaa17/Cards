import React, { useState } from 'react';
import './Down.css';

const Down = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <button onClick={openModal}>Open Menu</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>Close Menu</button>
            <div className="menu">
              <h1 className='ht'>Theme Color</h1>
              <h1 className='hd'>Change Theme</h1>
              <div className="menu-row">
                <div className="menu-item">
                  <div className="menu-box">Font Color</div>
                  <div className="box"></div> 
                  <p>#FFFF</p>
                </div>
              </div>
              <div className="menu-row">
                <div className="menu-item">
                  <div className="menu-box">Backgroundcolor</div>
                  <div className="box"></div> 
                  <p>#FFFF</p>
                </div>
              </div>
              <div className="menu-row">
                <div className="menu-item">
                  <div className="menu-box">Button color</div>
                  <div className="box"></div> 
                  <p>#FFFF</p>
                </div>
              </div>
              <div className="menu-row">
                <div className="menu-item">
                  <div className="menu-box">Button border Color</div>
                  <div className="box"></div> 
                  <p>#FFFF</p>
                </div>
              </div>
              <div className="menu-row">
                <div className="menu-item">
                  <div className="menu-box">Button mouseover Color</div>
                  <div className="box"></div> 
                  <p>#FFFF</p>
                </div>
              </div>
            </div>
          
            <div className="footer">
              <button className="button1">Cancel</button>
              <button className="button2">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Down;
