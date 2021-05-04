import React from 'react';

import ProfilePage from '../ProfilePage'

import {
    Container, 
    Header, 
    BackInfo, 
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    EmailIcon,
    BellIcon
} from './styles'

const Main: React.FC = () => {
    return(
        <Container>
            <Header>
                <button>
                    <BackInfo/>
                </button>
                <ProfileInfo>
                    <strong>Viper Bach</strong>
                    <span>102 tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage/>

            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon/>
                <BellIcon/>
                <EmailIcon/>
            </BottomMenu>
        </Container>
    )
}

export default Main