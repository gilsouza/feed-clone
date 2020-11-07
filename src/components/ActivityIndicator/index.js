import { Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import { Container, Wrapper } from './styles';

const ActivityIndicator = (props) => {
    const { size, speed } = props;
    return (
        <Container>
            <Wrapper>
                <Spinner
                    size={size || 30}
                    speed={speed || 1}
                    animating={true}
                />
            </Wrapper>
        </Container>
    );
};

export default ActivityIndicator;
