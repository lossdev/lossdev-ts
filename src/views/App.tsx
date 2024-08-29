import React from 'react';
import { RootBackground } from './RootBackground';
import { TopBar } from './TopBar';
import { MainContainer } from './MainContainer';
import { OccupationContainer } from './OccupationContainer';
import { SocialsContainer } from './SocialsContainer';
import { SpecialtiesContainer } from './SpecialtiesContainer';

function App() {
    return(
    <div className="bg-gradient-to-br from-cyan-500 to-indigo-500">
        <RootBackground>
            <TopBar />
            <MainContainer>
                <OccupationContainer />
                <SpecialtiesContainer />
                <SocialsContainer />
            </MainContainer>
        </RootBackground>
    </div>
    );
}

export default App;