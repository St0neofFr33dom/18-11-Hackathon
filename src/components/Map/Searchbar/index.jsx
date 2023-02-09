import { useContext, useState } from 'react';
import { getRequest } from '../../../funcs/getRequest.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Searchbar.module.css';
import browserWidthContext from '../../../context/browserWidthContext.jsx';

function Searchbar({ setSearchCoordinates }) {
    const [searchValue, setSearchValue] = useState('');

    const [borderFocus, setBorderFocus] = useState(false);

    const desktop = useContext(browserWidthContext)

    async function findCoordinates() {
        let coordinates = await getRequest(searchValue);
        if (coordinates === 'Error') {
            return;
        }
        setSearchCoordinates(coordinates);
        setSearchValue('');
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function keyPress(e) {
        if (e.keyCode === 13) {
            findCoordinates();
        }
    }

    function testFunction() {
        setBorderFocus(true);
        document.body.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.id !== 'inputSearch') {
                setBorderFocus(false);
            }
        });
    }
    return (
        <div
            className={`${styles.inputContainer} ${
                borderFocus ? styles.inputGreenBorder : ''
            } ${desktop ? styles.desktopInputContainer : ''}`}
        >
            <FontAwesomeIcon
                className={styles.inputMagnifyingGlass}
                icon={faMagnifyingGlass}
            />
            <input
                id='inputSearch'
                onBlur={() => setBorderFocus(false)}
                onFocus={testFunction}
                className={styles.inputSearch}
                type='text'
                placeholder='search'
                value={searchValue}
                onChange={handleChange}
                onKeyDown={keyPress}
            />

            <button
                className={styles.inputSearchButton}
                onClick={findCoordinates}
            >
                Search
            </button>
        </div>
    );
}

export default Searchbar;
