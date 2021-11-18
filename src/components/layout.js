import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLinkText to="/">Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/about">About</NavLinkText>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavLinkItem = styled.li`
  padding-right: 2rem;
`;

const NavLinkText = styled(Link)`
  color: black;
`;

const SiteTitle = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;
