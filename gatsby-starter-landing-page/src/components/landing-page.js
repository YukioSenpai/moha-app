import React from "react"
import styled from 'styled-components';
import logo from '../images/logo.png'
import background from '../images/background.png'
import downloads from '../images/andoird.png'
import downloads2 from '../images/apple.png'
import phones from '../images/phones.png'
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import { Link } from "gatsby"

const Background = styled.span`
background-image: url("../images/background.png");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
z-index: auto;
`;

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

const DivButton = styled.div`
display: flex;
justify-content: center;
width: 30%;
`;

const Coming = styled.div`
display: flex;
justify-content: center;
width: 30%;
margin-left: .3rem;
font-family: Roboto;
`;

const Downloads = styled.img`
width: 10rem;
height: 3rem;
`;

const Downloads2 = styled.img`
width: 10rem;
height: 3rem;
margin-left: .5rem;
`;

const Phones = styled.img`
position: absolute;
top: 80px;
right: 0;
height: auto;	
width: 60%;
`;

const Title = styled.div`
font-size: 3.5rem;
font-family: Poppins;
width: 35%;
color: #002060;
margin-top: 3.6rem;
`;

const Description = styled.div`
font-size: 1.35rem;
font-family: Roboto;
width: 40%;
color: #002060;
font-weight: bold;
margin-top: 2.5rem;
margin-bottom: 3.5rem;
`;

const Contact = styled.button`
margin-top: 2.4rem;
height: 2.5rem;
align-items: center;
display: flex;
outline: none;
padding: 0.5em 1.5em;
border: none;
background-color: #fdc02e;
border-radius: .5em;
text-decoration: none;
font-weight: 400;
color: #002060;
text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
text-align: center;
transition: all 0.2s;
text-transform: none;
font-weight: bold;

&:hover {
background-color: #002060;
    color: #fdc02e;
    font-weight: bold;
    cursor: pointer;
}
`;

const LiText = styled.li`
margin-top: .1rem;
`;

const LandingPage = ({ children }) => (
    <Background>
    <Container>
        <Navbar>
            <Logo src={logo} />
            <Social>
                <Link to="http://www.linkedin.com/company/moha-pro">
                    <Button
                        style={{ borderRadius: '6px', background: '#0a66c2', border: 'none', width: '2.8rem', height: '2.5rem', cursor: 'pointer' }}
                        icon={<LinkedinOutlined style={{ fontSize: '2rem', color: '#fff', borderRadius: '1rem', verticalAlign: 'sub' }} />} />
                </Link>
                <Link to="https://www.instagram.com/bienetre.moha/">
                    <Button
                        style={{ borderRadius: '6px', background: 'linear-gradient(#fb009f,#fe0202)', marginLeft: '.3rem', border: 'none', width: '2.8rem', height: '2.5rem', cursor: 'pointer', alignItems: 'center' }}
                        icon={<InstagramOutlined style={{ fontSize: '2rem', color: '#fff', borderRadius: '1rem' }} />} />
                </Link>
                <Link to="https://www.facebook.com/bienetre.moha">
                    <Button
                        style={{ borderRadius: '6px', background: '#3c5a99', border: 'none', width: '2.8rem', height: '2.5rem', cursor: 'pointer', marginLeft: '.3rem' }}
                        icon={<FacebookOutlined style={{ fontSize: '2rem', color: '#fff', verticalAlign: 'sub' }} />} />
                </Link>
            </Social>
        </Navbar>
        <Title>L'application qui vous veut du bien</Title>
        <Description>
            <p>Avec Moha,</p>
            <ul>
                <LiText> Évaluez votre niveau de bien-être</LiText>
                <LiText> Adoptez les bonnes pratiques bien-être de nos experts</LiText>
                <LiText> Créez vos propres habitudes pour vous sentir mieux au quotidien</LiText>
            </ul>
            <p>Parce que votre santé est ce qu'il y a de plus précieux.</p>
            <p>L'application est bientôt disponible. Soyez informé·e de sa sortie en avant-première !</p>
        </Description>
        <DivButton>
            <Downloads src={downloads2} />
            <Downloads2 src={downloads} />
        </DivButton>
        <Coming>Coming soon ! 🎉</Coming>
        <DivButton>
            <Link style={{ textDecoration: 'none' }} to='https://www.linkedin.com/in/quentin-ryckewaert/'>
                <Contact>Tenez-moi informé.e de sa sortie !</Contact>
            </Link>
        </DivButton>
        <Phones src={phones} />
    </Container>
    </Background>
)

export default LandingPage
