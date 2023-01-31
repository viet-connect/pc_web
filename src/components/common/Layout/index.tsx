import { Row } from 'antd';
import styled from 'styled-components';
import type { ReactNode } from 'react';

import Logo from '../../main/header_top/logo/Logo';
import FooterTop from '../../main/footer/footer_top/FooterTop';
import FooterBottom from '../../main/footer/footer_bottom/FooterBottom';
import HeaderMenu from '../../main/header_menu/HeaderMenu';
import Meta from './meta';

type IMainProps = {
	children: ReactNode;
};

export default function Layout({ children }: IMainProps) {
	return (
		<Wrapper id="layout-wrapper">
			<Meta />
			<Container id="layout-container">
				<Header>
					<Row justify="space-between" style={{ margin: '10px' }}>
						<Logo />
					</Row>
				</Header>
				<Nav>
					<HeaderMenu />
				</Nav>
				<Main>{children}</Main>
				<Footer>
					<FooterTop />
					<FooterBottom />
				</Footer>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	min-width: 350px;
	max-width: 1024px;
	width: 100%;
`;

const Header = styled.div`
	width: 100%;
	height: max-content;
`;

const Nav = styled.div`
	width: 100%;
	height: max-content;
	margin-bottom: 10px;
`;

const Main = styled.div`
	width: 100%;
	min-height: calc(100vh - 210px);
	height: max-content;
`;

const Footer = styled.div`
	width: 100%;
	height: max-content;
`;