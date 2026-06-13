"use client";
import { Header, Footer, Hero, Container, Row, Col, Card, SummaryList } from 'nhsuk-react-components';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Header>
        <Header.Container><Header.Logo href="/" /></Header.Container>
        <Header.Nav>
          <Header.NavItem as={Link as any} href="/">Home</Header.NavItem>
          <Header.NavItem as={Link as any} href="/about">About</Header.NavItem>
          <Header.NavItem as={Link as any} href="/executive">Executive</Header.NavItem>
          <Header.NavItem as={Link as any} href="/board">Board</Header.NavItem>
          <Header.NavItem as={Link as any} href="/contact">Contact</Header.NavItem>
        </Header.Nav>
      </Header>
      <Hero><Hero.Heading>About Signchronicity Global</Hero.Heading><Hero.Text>Governance-Led Healthcare Technology</Hero.Text></Hero>
      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row><Col width="two-thirds"><h2 className="nhsuk-heading-l">Our Identity</h2><p>Signchronicity Global is a governance-driven organisation operating across communication technology and safeguarding consultancy.</p></Col></Row>
            <Row className="nhsuk-u-margin-top-8">
              <Col width="one-half"><Card><Card.Content><Card.Heading as="h3">Tier 1: Board of Directors</Card.Heading><p>Strategic oversight and global expansion.</p><Link href="/board">View Board</Link></Card.Content></Card></Col>
              <Col width="one-half"><Card><Card.Content><Card.Heading as="h3">Tier 2: Executive Division</Card.Heading><p>Statutory compliance and operational leadership.</p><Link href="/executive">View Executive</Link></Card.Content></Card></Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer><Footer.Copyright>&copy; 2026 Signchronicity Global</Footer.Copyright></Footer>
    </>
  );
}
