import styles from './styles.module.scss';

import { FiUser } from 'react-icons/fi';

interface DoYourSubscriptionButtonProps{
    onClick: () => void;
}

export function DoYourSubscriptionButton({ onClick }:DoYourSubscriptionButtonProps){

    return(
        <button
            type="button"
            className={styles.BuyButton}
            onClick={onClick}
        >   <FiUser color="#04d361"/>
            Fazer inscrição
        </button>
    )
}