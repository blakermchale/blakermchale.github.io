import React from "react";
// import { ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Flex, Text } from 'rebass/styled-components';
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Line } from 'rc-progress'


const SkillBar = ({
    name,
    proficiency,
    color
}) => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        if (value <= proficiency) {
            setValue(value+0.05);
        }
        // setValue(proficiency);
    });
    return (
        <Flex>
            <Box px={2} py={2} width={1/4}>
                <Title>{name}</Title>
            </Box>
            <Box px={2} py={2} width={3/4} style={{ margin: 'auto' }}>
                <Line strokeWidth="4" strokeColor={color}  percent={value} />
            </Box>
        </Flex>
    );
}

// style={{transition: "1s ease", transitionDelay: "100s"}}

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
`;

export default SkillBar;
