import { ReactElement } from 'react';
import { Product } from 'state/types';
import styled from 'styled-components';
import ProductCard from './ProductCard';

interface Props {
    title: string,
    type?: string,
    children?: ReactElement,
    id?: string,
    products?: Product[],
};

function ProductBox(props: Props) {
    const { title, children, id, products = [] } = props;
    return (
        <Wrapper id={id}>
            <Header>
                <Title>{title}</Title>
            </Header>
            <Contents>
                {products.map((item, i) => {
                    return (
                        <ProductCard data={item} key={i} />
                    )
                })}
            </Contents>
            {children}
        </Wrapper>
    )
}
export default ProductBox;
const Wrapper = styled.div`
    width:100%;
    margin-bottom:40px;
`
const Header = styled.div`
    border-bottom: 2px solid #eeeeee;
    display: inline-block;
    width: 100%;
    position: relative;
    margin-top: 0;
    margin-bottom: 20px;
`
const Title = styled.span`
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    float: left;
    text-transform: uppercase;
    margin-bottom: 0px;
    background-color: #232f3e;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 11px 20px;
    position: relative;
    bottom: -2px;
`
const Contents = styled.div`
    display:flex;
    flex-wrap:wrap;
    grid-gap:30px;
    flex:1;
`