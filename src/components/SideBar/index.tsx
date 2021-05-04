import React from 'react';

import StickyBox from 'react-sticky-box';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
 } from './styles';

 import List from '../List'
 import FollowSuggestion from '../FollowSuggestion'
 import News from '../News'

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="buscar no twitter" />
              <SearchIcon/>
          </SearchWrapper>

          <StickyBox>

            <Body>
                <List 
                    title="talvez você curta"
                    elements={[
                        <FollowSuggestion
                            name="matheus prando"
                            nickname="furano"
                        />,
                        <FollowSuggestion
                            name="yuqi"
                            nickname="gidle_yuqi"
                        />,
                        <FollowSuggestion
                            name="sana"
                            nickname="twice_sana"
                        />,
                    ]}
                />
                <List 
                    title="talvez você curta"
                    elements={[
                        <News/>,
                        <News/>,
                        <News/>,
                    ]}
                />
                <List 
                    title="talvez você curta"
                    elements={[
                        <News/>,
                        <News/>,
                        <News/>,
                    ]}
                />
                <List 
                    title="talvez você curta"
                    elements={[
                        <News/>,
                        <News/>,
                        <News/>,
                    ]}
                />
            </Body>
          </StickyBox>

      </Container>
  );
}

export default SideBar;