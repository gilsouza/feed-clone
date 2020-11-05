import React from 'react';

import { Container } from './styles';

const Header = (props) => {
    const { title, detail } = props;

    return (
        <Container>
            {title && <span>{title}</span>}
            {detail && <span>{detail}</span>}
        </Container>
    );
};

export default Header;
