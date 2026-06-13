"use client";

import {
  Header,
  Footer,
  Hero,
  Container,
  Row,
  Col,
  Card,
  Table
} from 'nhsuk-react-components';
import Link from 'next/link';

export default function Executive() {
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
        <Hero.Heading>The Executive Division</Hero.Heading>
        <Hero.Text>
          Operationalizing strategy with absolute focus on safety, compliance, and governance.
        </Hero.Text>
      </Hero>

      <main id="main-content">
        <section className="nhsuk-section">
          <Container>
            <Row>
              <Col width="two-thirds">
                <h2 className="nhsuk-heading-l">Governance-Led Operations</h2>
                <p>
                  The Executive Division is the operational engine of Signchronicity Global. It ensures that every division — BSL, Multilingual, and Safeguarding — operates to identical, uncompromised safety and compliance baselines.
                </p>

                <h3 className="nhsuk-heading-m">Key Statutory & Governance Roles</h3>
                <Table responsive>
                  <Table.Head>
                    <Table.Row>
                      <Table.Cell>Role</Table.Cell>
                      <Table.Cell>Responsibility</Table.Cell>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><strong>Statutory CCO</strong></Table.Cell>
                      <Table.Cell>Chief Compliance Officer - Ensures all global operations meet local and international statutory requirements.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><strong>Statutory CSO</strong></Table.Cell>
                      <Table.Cell>Chief Safety Officer - Oversees clinical safety governance across all technology products.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><strong>IG Lead</strong></Table.Cell>
                      <Table.Cell>Information Governance Lead - Manages data privacy, NHS Spine/EMIS alignment, and local-first data integrity.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><strong>Clinical Safety Lead</strong></Table.Cell>
                      <Table.Cell>Ensures all patient-facing translation tools adhere to strict clinical safety standards.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><strong>Digital Lead</strong></Table.Cell>
                      <Table.Cell>Directs the development of offline-resilient WebAssembly and AI-driven technology.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><strong>Quality Lead</strong></Table.Cell>
                      <Table.Cell>Maintains the high standards of the "Safety Loop" (You Said / They Said) and accessibility verification.</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Col>
            </Row>

            <Row className="nhsuk-u-margin-top-8">
               <Col width="full">
                 <h2 className="nhsuk-heading-l">The Executive Mandate</h2>
               </Col>
               <Col width="one-half">
                 <Card>
                    <Card.Content>
                      <Card.Heading>Safety First</Card.Heading>
                      <Card.Description>
                        Every line of code and every safeguarding audit is reviewed through the lens of harm reduction and institutional risk management.
                      </Card.Description>
                    </Card.Content>
                 </Card>
               </Col>
               <Col width="one-half">
                 <Card>
                    <Card.Content>
                      <Card.Heading>Operational Integrity</Card.Heading>
                      <Card.Description>
                        We deliver the strategic direction set by the Board, ensuring fiscal responsibility and operational consistency across all divisions.
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
