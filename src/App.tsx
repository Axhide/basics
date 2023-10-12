import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import {Box} from "./components/Box.styled";

function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyledBtn color="green" fontSize={"20px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color="red">Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={"30px"}>Hello</StyledBtn>*/}

                <StyledBtn btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn btnType={"outline"}>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;
