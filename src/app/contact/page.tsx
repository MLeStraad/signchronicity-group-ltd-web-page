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
  ActionLink,
  Select,
  Input,
  Textarea,
  Button,
  Fieldset
} from 'nhsuk-react-components';

export default function Contact() {
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
        <Hero.Heading>Connect with Signchronicity Global</Hero.Heading>
        <Hero.Text>
          Governance-aligned solutions for your communication and safeguarding needs.
        </Hero.Text>
      </Hero>

      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row>
              <Col width="two-thirds">
                <h2 className="nhsuk-heading-l">Contact Our Divisions</h2>
                <p>Please select the division you wish to contact so we can route your inquiry to the correct governance lead.</p>

                <form>
                  <Fieldset>
                    <Fieldset.Legend className="nhsuk-fieldset__legend--m">
                      Inquiry Details
                    </Fieldset.Legend>

                    <Select
                      label="Which division are you interested in?"
                      id="division-select"
                      name="division"
                    >
                      <option value="general">General Governance Inquiry</option>
                      <option value="bsl">BSL Division (CIC)</option>
                      <option value="multilingual">Multilingual Tech (14-App Suite)</option>
                      <option value="safeguarding">Safeguarding Consultancy & Audits</option>
                      <option value="executive">Executive & Board</option>
                    </Select>

                    <Input
                      label="Full Name"
                      id="name"
                      name="name"
                      autoComplete="name"
                    />

                    <Input
                      label="Organisation"
                      id="organisation"
                      name="organisation"
                    />

                    <Input
                      label="Email Address"
                      id="email"
                      name="email"
                      autoComplete="email"
                    />

                    <Textarea
                      label="How can we help you?"
                      id="message"
                      name="message"
                      rows={5}
                    />

                    <Button type="submit">Submit Inquiry</Button>
                  </Fieldset>
                </form>
              </Col>
            </Row>

            <Row className="nhsuk-u-margin-top-8">
                <Col width="one-third">
                    <Card>
                        <Card.Content>
                            <Card.Heading as="h4">Our Standards</Card.Heading>
                            <Card.Description>
                                All communications are handled with strict Information Governance (IG) oversight.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Col>
                <Col width="one-third">
                    <Card>
                        <Card.Content>
                            <Card.Heading as="h4">Response Time</Card.Heading>
                            <Card.Description>
                                We aim to respond to all professional inquiries within 24-48 business hours.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Col>
                <Col width="one-third">
                    <Card>
                        <Card.Content>
                            <Card.Heading as="h4">Global Reach</Card.Heading>
                            <Card.Description>
                                Supporting partners across health systems, education, and local authorities worldwide.
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
