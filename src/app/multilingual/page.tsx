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
  SummaryList
} from 'nhsuk-react-components';
import Link from 'next/link';

export default function MultilingualDivision() {
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
        <Hero.Heading>Multilingual Division (MML)</Hero.Heading>
        <Hero.Text>
          High-performance, offline-resilient translation technology for safety-critical healthcare environments.
        </Hero.Text>
      </Hero>

      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row>
              <Col width="two-thirds">
                <h2 className="nhsuk-heading-l">The 14-App Strategy</h2>
                <p className="nhsuk-body-m">
                  Signchronicity Global provides a suite of fourteen standalone, patient-controlled translation applications. These tools are engineered to bridge the communication gap in primary care, emergency departments, and high-frequency clinical pathways.
                </p>
                <p>
                  Our technology eliminates the “Never Met Need” by ensuring that language is never a barrier to safe, effective care. By providing a professional, trustworthy communication bridge, we reduce institutional risk and improve patient outcomes.
                </p>

                <h3 className="nhsuk-heading-m">Core Technology Pillars</h3>
                <SummaryList>
                  <SummaryList.Row>
                    <SummaryList.Key>Local-First Inference</SummaryList.Key>
                    <SummaryList.Value>
                      Translation and speech-to-text processing occurs entirely on the local device using WebAssembly. No active internet connection is required.
                    </SummaryList.Value>
                  </SummaryList.Row>
                  <SummaryList.Row>
                    <SummaryList.Key>Privacy & Compliance</SummaryList.Key>
                    <SummaryList.Value>
                      Strict adherence to NHS Data Security standards. No patient data, audio, or transcription ever leaves the device. Zero integration with NHS Spine or external APIs.
                    </SummaryList.Value>
                  </SummaryList.Row>
                  <SummaryList.Row>
                    <SummaryList.Key>Safety Loop</SummaryList.Key>
                    <SummaryList.Value>
                      A "Check before send" verification system (You Said / They Said) that ensures clinical accuracy and patient understanding in real-time.
                    </SummaryList.Value>
                  </SummaryList.Row>
                </SummaryList>
              </Col>
            </Row>

            <Row className="nhsuk-u-margin-top-8">
              <Col width="full">
                <h2 className="nhsuk-heading-l">Impact on Clinical Pathways</h2>
              </Col>
              <Col width="one-third">
                <Card>
                  <Card.Content>
                    <Card.Heading>Patient Empowerment</Card.Heading>
                    <Card.Description>
                      Patient-held and patient-controlled interfaces that respect autonomy and cultural safety.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Col>
              <Col width="one-third">
                <Card>
                  <Card.Content>
                    <Card.Heading>Risk Reduction</Card.Heading>
                    <Card.Description>
                      Eliminating communication errors in high-stakes environments like GP consultations and blood tests.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Col>
              <Col width="one-third">
                <Card>
                  <Card.Content>
                    <Card.Heading>Operational Efficiency</Card.Heading>
                    <Card.Description>
                      Zero ongoing costs and zero administrative friction. Designed for rapid clinical deployment.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Col>
            </Row>

            <div className="nhsuk-u-margin-top-9">
              <Row>
                <Col width="two-thirds">
                  <h2 className="nhsuk-heading-l">Global Deployment</h2>
                  <p>
                    The Multilingual Division is structured for international deployment, aligning with global health-tech ecosystems and cross-border regulatory standards.
                  </p>
                  <ActionLink as={Link as any} href="/contact">Enquire about our 14-App Suite</ActionLink>
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
