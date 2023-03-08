import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { useState } from 'react';
import Modal from 'react-modal';
import CartModal from '../CartModal';
import { useUserContext } from '../../hooks/useUserContext';

Modal.setAppElement('#root');

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const { userLogout } = useUserContext();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button type='button' onClick={openModal}>
                <MdShoppingCart size={28} />
              </button>
              <Modal isOpen={modalIsOpen}>
                <CartModal />
              </Modal>
              <button type='button' onClick={userLogout}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
