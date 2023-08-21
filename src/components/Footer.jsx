import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})};
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
margin: 0px;
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})};
`
const Title = styled.h3`
margin-bottom: 20px;
margin-top: 10px;
`
const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#fbf6f6"})};
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`

const Payment=styled.img`
width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SUBP</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad quasi excepturi nihil consequatur voluptate saepe neque illum id ullam tempora minus, sit perferendis quas suscipit, sed aliquam eveniet molestias. Culpa ipsum, voluptatibus eaque minima ab blanditiis quasi commodi. Voluptate!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/> Paul Para, Pound Road, W/n0.04, Dhubri, Assam
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/> +1 234 56 78 
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/> contact@subp.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> 
            </Right>
        </Container>
    )
}

export default Footer
