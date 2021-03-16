import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose,  onUpdateAvatar}) {
  
    const currentUser = React.useContext(CurrentUserContext);
    const inputAvatarRef = React.useRef("");
    const [avatar, setAvatar] = React.useState('');

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);


    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({ 
            avatar: inputAvatarRef.current.value  
        });
    }

    function handleChangeAvatar(e) {
        setAvatar(e.target.value);
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title="Обновить аватар"
            popupName="avatar"
            formName="form_update"
            onSubmit={handleSubmit}
        >
            <input 
                className="popup__input popup__input_link-avatar popup__input_link" 
                type="url" 
                name="avatar" 
                value={avatar ? avatar : ""}
                ref={inputAvatarRef}
                onChange={handleChangeAvatar}
                required 
            />   
        </PopupWithForm>
  );
}

export default EditAvatarPopup;