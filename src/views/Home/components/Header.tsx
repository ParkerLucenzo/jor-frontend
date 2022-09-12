import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Content>
                <Logo src='/assets/img/logo.png' />
                <MenuContaier>
                    <MenuItem href="#nzd">Product (Nzd)</MenuItem>
                    <MenuItem href="#usd">Product (Usd)</MenuItem>
                    <MenuItem href="#euro">Product (Euro)</MenuItem>
                </MenuContaier>
            </Content>
        </Container>
    )
}
export default Header;
const Container = styled.div`
    width:100%;
    background:#232f3e;
    padding:25px 0px 25px 0px;
`;
const Content = styled.div`
    display:flex;
    flex:1;
    padding:0px 16px;
    align-items:center;
`;
const Logo = styled.img`
    width:136px;
    height:36px;
`
const MenuContaier = styled.div`
    display:flex;
    grid-gap:40px;
    margin-left:150px;
`
const MenuItem = styled.a`
    font-size: 14px;
    font-weight:900;
    text-transform: uppercase;
    cursor:pointer;
    color:#fff;
    text-decoration: none;
    &:hover{
        color: #ff3c20;
    }
`