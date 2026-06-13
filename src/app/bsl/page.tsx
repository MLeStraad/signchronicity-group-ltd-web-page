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
  InsetText
} from 'nhsuk-react-components';
import Link from 'next/link';

export default function BSLDivision() {
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
        <Hero.Heading>BSL Division (CIC)</Hero.Heading>
        <Hero.Text>
          Deaf-led accessibility. Offline-resilient BSL tools at the point of care.
        </Hero.Text>
      </Hero>

      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row>
              <Col width="two-thirds">
                <h2 className="nhsuk-heading-l">A Community Interest Company (CIC)</h2>
                <p>
                  The BSL Division of Signchronicity Global is a Deaf-led Community Interest Company. We exist to provide immediate, barrier-free access to British Sign Language in high-stakes clinical and corporate environments.
                </p>

                <InsetText>
                   <p><strong>Zero Integration. Zero Friction.</strong> Our tools are designed to work independently of complex IT infrastructures, ensuring they are available when and where they are needed most.</p>
                </InsetText>

                <h3 className="nhsuk-heading-m">Our Technology Highlights</h3>
                <ul className="nhsuk-list nhsuk-list--bullet">
                  <li><strong>Offline-Resilience:</strong> Operates without an active internet connection, protecting patient privacy and ensuring reliability in 'dead zones'.</li>
                  <li><strong>Haptic Mechanics:</strong> Utilises tactile feedback to provide non-visual cues and confirmations to the user, enhancing the interaction experience for Deaf and Deafblind individuals.</li>
                  <li><strong>AIS Compliance:</strong> Strictly aligned with the NHS Accessible Information Standard (AIS), ensuring statutory duties are met at every patient touchpoint.</li>
                  <li><strong>User-Held Accessibility:</strong> Empowering the patient to control their own communication tool.</li>
                </ul>
              </Col>
            </Row>

            <Row className="nhsuk-u-margin-top-8">
               <Col width="one-half">
                 <Card>
                    <Card.Content>
                      <Card.Heading>Smart Contextual Retention</Card.Heading>
                      <Card.Description>
                        Our BSL tools understand the clinical pathway, providing relevant signs and translations based on the specific department or consultation type.
                      </Card.Description>
                    </Card.Content>
                 </Card>
               </Col>
               <Col width="one-half">
                 <Card>
                    <Card.Content>
                      <Card.Heading>Deaf-Led Innovation</Card.Heading>
                      <Card.Description>
                        Every feature is designed, tested, and verified by Deaf professionals to ensure cultural safety and linguistic precision.
                      </Card.Description>
                    </Card.Content>
                 </Card>
               </Col>
            </Row>

            <div className="nhsuk-u-margin-top-9">
              <Row>
                <Col width="two-thirds">
                  <h2 className="nhsuk-heading-l">Break the Silence</h2>
                  <p>Eliminate the communication gap in your service with our specialist BSL tools.</p>
                  <ActionLink as={Link as any} href="/contact">Enquire about BSL Services</ActionLink>
                </Col>
              </Row>
            </div>
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
