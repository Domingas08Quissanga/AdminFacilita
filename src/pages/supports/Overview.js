import React from "react";
import Logo from "../../components/Logo";
import data from "../../data/supports/overview.json";
import { Anchor, Box, Image, Heading, Section, Text } from "../../components/elements";
import { Container, Row, Col } from "react-bootstrap";

export default function Overview() {
    return (
        <Box className="mc-overview">
            <Section className="mc-overview-banner">
                <Container>
                    <Logo href="/" src={ data?.banner.logo } alt="logo" name="Facilita" className="lg" />
                    <Heading as="h1">{ data?.banner.title }</Heading>
                    <Text>{ data?.banner.descrip }</Text>
                  
                    <Anchor 
                        href="/ecommerce" 
                        target="_blank" 
                        icon="launch" 
                        text="explorar agora" 
                        rel="noopener noreferrer"
                        className="btn btn-success m-2"
                    />
                </Container>
            </Section>
            <Section className="mc-overview-demo">
                <Container fluid>
                    <Heading as="h2" className="mc-overview-title">Páginas</Heading>
                    <Row xs={1} sm={2} xl={3}>
                        {data?.demos.map((demo, index) => (
                            <Col key={index} >
                                <Box className="mc-overview-card">
                                    <Box className="mc-overview-media">
                                        <Image src={demo.image} alt="demo" />
                                        <Box className="mc-overview-overlay">
                                            <Anchor href={demo.path} target="_blank" rel="noopener noreferrer" className="mc-overview-link">live preview</Anchor>
                                        </Box>
                                    </Box>
                                    <Heading className="mc-overview-name">{demo.title}</Heading>
                                </Box>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>
            <Section className="mc-overview-footer">
                <Heading as="h2">Quer explorar mais esta área?</Heading>
                <a 
                    href="/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-success m-2" 
                >
                    <i className="material-icons"></i>
                    <span>contacte-nos</span>
                </a>
                <Text> Facilita <Text as="span">Angola</Text></Text>
            </Section>
        </Box>
    )
}