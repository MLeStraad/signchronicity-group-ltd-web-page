"use client";

import {
  Header,
  Footer,
  Hero,
  Container,
  Row,
  Col,
  Card,
  ActionLink,
  InsetText,
  Details
} from 'nhsuk-react-components';
import Link from 'next/link';
import { useState } from 'react';

export default function Safeguarding() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
        <Hero.Heading>Safeguarding Consultancy Division</Hero.Heading>
        <Hero.Text>
          Independent statutory reviews, crisis case leadership, and high-authority corporate governance audits.
        </Hero.Text>
      </Hero>

      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row>
              <Col width="two-thirds">
                <h2 className="nhsuk-heading-l">Independent Authority in Safety</h2>
                <p>
                  Our Safeguarding Division provides executive-level training and consultancy across public and private sectors. We lead statutory reviews under the Care Act 2014 and provide the independent assurance required to manage institutional risk.
                </p>

                <h3 className="nhsuk-heading-m">Our Consultancy Services</h3>
                <ul className="nhsuk-list nhsuk-list--bullet">
                  <li><strong>Statutory Reviews:</strong> Leading independent Safeguarding Adult Reviews (SARs) and Domestic Homicide Reviews (DHRs).</li>
                  <li><strong>Crisis Case Leadership:</strong> High-stakes management of active safeguarding crises.</li>
                  <li><strong>Corporate Audits:</strong> Comprehensive evaluation of organisational safeguarding frameworks and reporting lines.</li>
                  <li><strong>Executive Training:</strong> Specialist training for Boards and senior leaders on statutory duties and liability.</li>
                </ul>

                <hr className="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible" />

                <h2 className="nhsuk-heading-l">Harm Hiding in Plain Sight</h2>
                <p className="nhsuk-body-m">
                  Systemic risk often lives in the gaps between policy and practice. Use the interactive tool below to discover how institutional harm can remain invisible without robust governance.
                </p>

                <div className="nhsuk-u-margin-bottom-8">
                    <Row>
                        <Col width="one-half">
                            <Card clickable onClick={() => toggleReveal('risk1')}>
                                <Card.Content>
                                    <Card.Heading as="h4">Communication Silos</Card.Heading>
                                    <Card.Description>
                                        {revealed['risk1'] ? (
                                            <div className="nhsuk-u-font-weight-bold nhsuk-u-secondary-text-color">
                                                REVEALED: Information held in isolated departments prevents a holistic view of patient safety, leading to missed warning signs.
                                            </div>
                                        ) : (
                                            "Click to reveal the hidden risk..."
                                        )}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Col>
                        <Col width="one-half">
                            <Card clickable onClick={() => toggleReveal('risk2')}>
                                <Card.Content>
                                    <Card.Heading as="h4">Baseline Compliance</Card.Heading>
                                    <Card.Description>
                                        {revealed['risk2'] ? (
                                            <div className="nhsuk-u-font-weight-bold nhsuk-u-secondary-text-color">
                                                REVEALED: Treating 'minimum compliance' as 'best practice' creates a liability gap where complex safeguarding needs go unmet.
                                            </div>
                                        ) : (
                                            "Click to reveal the hidden risk..."
                                        )}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <InsetText>
                    <p>Our consultancy exists to uncover these risks before they result in harm. We provide the "Signchronicity Standard" of independent corporate assurance.</p>
                </InsetText>

                <div className="nhsuk-u-margin-top-9">
                  <ActionLink as={Link as any} href="/contact">Request a Statutory Review Audit</ActionLink>
                </div>
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
