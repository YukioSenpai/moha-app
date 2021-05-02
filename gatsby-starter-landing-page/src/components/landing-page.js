import React from "react"
import styled from 'styled-components';
import logo from '../images/logo.png'
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined, AppleOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import { Link } from "gatsby"

const Container = styled.div`
height: 100vh;
z-index: 1;
padding: 4rem;
`;

const Navbar = styled.div`
display: flex;
justify-content: space-between;
margin-left: 1rem;
`;

const Social = styled.div``;

const Logo = styled.img``;

const Title = styled.div`
font-size: 5rem;
font-family: Futura;
width: 35%;
color: #002060;
margin-top: 3rem;
`;

const Description = styled.div`
font-size: 1.6rem;
font-family: Roboto;
width: 33%;
color: #002060;
font-weight: bold;
margin-top: 1.4rem;
`;

const AppleButton = styled.button`
display: flex;
justify-content: space-between;
background-color: #000;
`;

const LandingPage = ({ children }) => (
    <Container>
        <Navbar>
            <Logo src={logo} />
            <Social>
                <Link to="https://www.facebook.com/bienetre.moha">
                    <Button
                        style={{ borderRadius: '6px', background: '#3c5a99', border: 'none', width: '2.8rem', height: '2.5rem', cursor: 'pointer' }}
                        icon={<FacebookOutlined style={{ fontSize: '2rem', color: '#fff' }} />} />
                </Link>
                <Link to="http://www.linkedin.com/company/moha-pro">
                    <Button
                        style={{ borderRadius: '6px', background: '#0a66c2', marginLeft: '.3rem', border: 'none', width: '2.8rem', height: '2.5rem', cursor: 'pointer' }}
                        icon={<LinkedinOutlined style={{ fontSize: '2rem', color: '#fff', borderRadius: '1rem' }} />} />
                </Link>
                <Link to="https://www.instagram.com/bienetre.moha/">
                    <Button
                        style={{ borderRadius: '6px', background: 'linear-gradient(#fb009f,#fe0202)', marginLeft: '.3rem', border: 'none', width: '2.8rem', height: '2.5rem', cursor: 'pointer' }}
                        icon={<InstagramOutlined style={{ fontSize: '2rem', color: '#fff', borderRadius: '1rem' }} />} />
                </Link>
            </Social>
        </Navbar>
        <Title>L'application qui vous veut du bien</Title>
        <Description>Parce qu'aujourd'hui, votre santé est ce qu'il y a de plus précieux, Moha a conçu l'application qui vous permet d'améliorer votre bien-être au quotidien. Et c'est offert par votre entreprise !</Description>
        <AppleButton>
            <div style={{ verticalAlign: 'baseline' }}>
                <AppleOutlined style={{ fontSize: '2rem', color: '#fff' }} />
            </div>
            <div>
                <div style={{ color: '#fff', fontFamily: 'Futura' }}>Télécharger sur </div>
                <div style={{ color: '#fff', fontFamily: 'Futura', fontSize: '2rem' }}>App Store</div>
            </div>
        </AppleButton>
    </Container>
)

export default LandingPage
