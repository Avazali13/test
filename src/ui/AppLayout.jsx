import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: #fff;
  /* padding: 4rem 4.8rem 6.4rem; */
  overflow: scroll;
  /* overflow-x: hidden; */
  overflow-x: hidden;
  overflow-y: unset;
  scrollbar-color: var(--color-brand-500);
  @media only screen and (min-width: 768px) {
    padding: 4rem 4.8rem 6.4rem;
  }
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  /* overflow-x: hidden; */

  @media only screen and (min-width: 768px) {
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
`;

// const StyledAppLayout = styled.div`
// display: flex;
// flex-direction: column;
// `;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (<>
    <Header />
    <StyledAppLayout>
      <div className="sticky top-0 z-10 md:relative">
        <SideBar />
      </div>
  
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  </>
  );
}

export default AppLayout;
