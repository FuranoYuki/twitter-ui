import React from 'react';

import {
    Container, 
    Banner, 
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    FollowAge,
    EditButton,
} from './styles'

import Feed from '../Feed'


const ProfilePage: React.FC = () => {
    return(
        <Container>
            <Banner>
                <Avatar/>
            </Banner>

            <ProfileData>
                <EditButton outlined>
                    Editar Perfil
                </EditButton>

                <h1>ViperBach</h1>
                <h2>@viper_bach</h2>

                <ul>
                    <li>
                        <LocationIcon/>
                        São Paulo - SP
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 4 de outubro de 1999
                    </li>
                </ul>

                <FollowAge>
                    <span>
                        seguindo <strong>54</strong>
                    </span>
                    <span>
                        <strong>1002 </strong> seguidores
                    </span>
                </FollowAge>

            </ProfileData>

            <Feed/>
        </Container>
    )
}

export default ProfilePage; 