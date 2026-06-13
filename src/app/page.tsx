"use client";
import { Header, Footer, Hero, Container, Row, Col, Card, ActionLink } from 'nhsuk-react-components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header>
        <Header.Container><Header.Logo href="/" /><Header.Content><Header.MenuToggle /></Header.Content></Header.Container>
        <Header.Nav>
          <Header.NavItem as={Link as any} href="/">Home</Header.NavItem>
          <Header.NavItem as={Link as any} href="/about">About</Header.NavItem>
          <Header.NavItem as={Link as any} href="/executive">Executive</Header.NavItem>
          <Header.NavItem as={Link as any} href="/board">Board</Header.NavItem>
          <Header.NavItem as={Link as any} href="/bsl">BSL Division</Header.NavItem>
          <Header.NavItem as={Link as any} href="/multilingual">Multilingual</Header.NavItem>
          <Header.NavItem as={Link as any} href="/safeguarding">Safeguarding</Header.NavItem>
          <Header.NavItem as={Link as any} href="/contact">Contact</Header.NavItem>
        </Header.Nav>
      </Header>
      <Hero>
        <Hero.Heading>Signchronicity Global</Hero.Heading>
        <Hero.Text>Governance-Led Communication Technology and Statutory Safeguarding Consultancy.</Hero.Text>
        <Hero.Text>Eliminating systemic communication failures, reducing institutional risk, and ensuring statutory duties are met with confidence.</Hero.Text>
        <div className="nhsuk-u-margin-top-4"><ActionLink as={Link as any} href="/about">Learn About Our Governance</ActionLink></div>
      </Hero>
      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row><Col width="two-thirds"><h2 className="nhsuk-heading-l">Breaking the Chain of Risk</h2><p className="nhsuk-body-m nhsuk-u-font-weight-bold">Communication failures create risk. Risk creates harm. Harm creates liability.</p><p>Signchronicity Global exists to break this chain through offline-resilient systems and independent corporate assurance.</p></Col></Row>
            <Row className="nhsuk-u-margin-top-8">
              <Col width="one-third"><Card clickable><Card.Content><Card.Heading as="h3"><Link href="/bsl" className="nhsuk-card__link">BSL Division</Link></Card.Heading><Card.Description>Deaf-led accessibility and offline-resilient BSL tools.</Card.Description></Card.Content></Card></Col>
              <Col width="one-third"><Card clickable><Card.Content><Card.Heading as="h3"><Link href="/multilingual" className="nhsuk-card__link">Multilingual Division</Link></Card.Heading><Card.Description>Standalone language applications for clinical environments.</Card.Description></Card.Content></Card></Col>
              <Col width="one-third"><Card clickable><Card.Content><Card.Heading as="h3"><Link href="/safeguarding" className="nhsuk-card__link">Safeguarding Division</Link></Card.Heading><Card.Description>Independent statutory reviews and corporate audits.</Card.Description></Card.Content></Card></Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer><Footer.Copyright>&copy; 2026 Signchronicity Global</Footer.Copyright></Footer>
    </>
  );
}
