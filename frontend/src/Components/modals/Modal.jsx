import { useDispatch, useSelector } from 'react-redux';
import { Modal as ElModal } from 'react-bootstrap';
import { actions } from '../../slices/index.js';
import AddChannelModal from './AddChannelModal.jsx';
import RenameChannelModal from './RenameChannelModal.jsx';
import RemoveChannelModal from './RemoveChannelModal.jsx';

const mapping = {
  addChannel: AddChannelModal,
  renameChannel: RenameChannelModal,
  removeChannel: RemoveChannelModal,
};

const Modal = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(actions.closeModal());
  const { isOpened, modalType } = useSelector((state) => state.modal);
  const ModalComponent = mapping[modalType];

  return (
    <ElModal show={isOpened} onHide={handleClose} centered>
      {ModalComponent && <ModalComponent handleClose={handleClose} />}
    </ElModal>
  );
};

export default Modal;
