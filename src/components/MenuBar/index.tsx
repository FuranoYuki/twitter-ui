import React from 'react';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
 } from './styles';

 import Button from '../Button'

const MenuBar: React.FC = () => {
  return(
      <Container>
          <Topside>
              <Logo/>

              <MenuButton>
                  <HomeIcon/>
                  <span>Página ínicial</span>
              </MenuButton>
              
              <MenuButton>
                  <BellIcon/>
                  <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon/>
                  <span>Messagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon/>
                  <span>Favoritados</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon/>
                  <span>Perfil</span>
              </MenuButton>
            
              <Button>
                <span>Tweetar</span>
            </Button>

          </Topside>

            <Botside>
                <Avatar />

                <ProfileData>
                <strong>Guilherme Rodz</strong>
                <span>@guilherme_rodz</span>
                </ProfileData>

                <ExitIcon />
            </Botside>

      </Container>
  )
}

export default MenuBar;