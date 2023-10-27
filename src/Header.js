import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";
import styles from './header.css';
export default function Header({title, children}) {

  const {onToggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <h1 className={styles.title}>{title}</h1>    
            <Button onClick={onToggleTheme}>Mudar Tema</Button>
            {children}    
        </div>
    );
}


Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    title: `JStack's Blog`
};