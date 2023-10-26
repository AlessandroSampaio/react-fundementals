import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

export default function Header({title, children}) {

  const {onToggleTheme} = useContext(ThemeContext);

    return (
        <div 
            style={{
                background: "#ccc",
                fontSize: '20px',
                fontFamily: "sans-serif",
                marginBottom: 32
            }}    
        >
            <h1>{title}</h1>    
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