import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";
import Title from "../Title";

export default function Header({title, children}) {

  const {onToggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <Title>{title}</Title>    
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