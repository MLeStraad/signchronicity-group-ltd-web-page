"use client";

import Link from 'next/link';
import {
  Header,
  Footer,
  Hero,
  Container,
  Row,
  Col,
  Card,
  InsetText
} from 'nhsuk-react-components';

export default function Board() {
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo href="/" />
          <Header.Content>
            <Header.MenuToggle />
          </Header.Content>
        </Header.Container>
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
        <Hero.Heading>Board of Directors</Hero.Heading>
        <Hero.Text>
          Strategic leadership, global expansion, and the protection of organisational integrity.
        </Hero.Text>
      </Hero>

      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row>
              <Col width="two-thirds">
                <h2 className="nhsuk-heading-l">Strategic Oversight & Governance</h2>
                <p>
                  The Board of Directors at Signchronicity Global provides the high-level governance required to operate as an internationally credible health-tech and safeguarding organisation.
                </p>

                <InsetText>
                  <p><strong>The Board sets direction.</strong> It ensures the company remains true to its core mission: eliminating systemic communication failures worldwide.</p>
                </InsetText>
              </Col>
            </Row>

            <Row className="nhsuk-u-margin-top-8">
                <Col width="full">
                    <h3 className="nhsuk-heading-m">Governance Hierarchy</h3>
                </Col>
                <Col width="full">
                    {/* Visual representation of Board vs Executive */}
                    <div style={{ border: '2px solid #002f5c', padding: '20px', textAlign: 'center', marginBottom: '20px', borderRadius: '8px' }}>
                        <h4 className="nhsuk-heading-s" style={{ color: '#002f5c', margin: 0 }}>TIER 1: BOARD OF DIRECTORS</h4>
                        <p className="nhsuk-body-s">Strategic Leadership & Global Vision</p>
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{ width: '2px', height: '40px', backgroundColor: '#002f5c', margin: '0 auto' }}></div>
                    </div>
                    <div style={{ border: '2px solid #ffeb3b', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
                        <h4 className="nhsuk-heading-s" style={{ margin: 0 }}>TIER 2: EXECUTIVE DIVISION</h4>
                        <p className="nhsuk-body-s">Operational Governance & Statutory Compliance</p>
                    </div>
                </Col>
            </Row>

            <Row className="nhsuk-u-margin-top-8">
              <Col width="one-half">
                <Card>
                  <Card.Content>
                    <Card.Heading>International Compliance</Card.Heading>
                    <Card.Description>
                      Aligning our safeguarding frameworks and translation tools with the regulatory demands of international health systems.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Col>
              <Col width="one-half">
                <Card>
                  <Card.Content>
                    <Card.Heading>Global Expansion</Card.Heading>
                    <Card.Description>
                      Leading our entry into international multilingual markets and cross-border safeguarding partnerships.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer>
        <Footer.Copyright>
          &copy; 2026 Signchronicity Global
        </Footer.Copyright>
      </Footer>
    </>
  );
}
