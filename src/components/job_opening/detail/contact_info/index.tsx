import React from 'react';
import styled from 'styled-components';

export default function JobDetailContactInfo() {
	return (
		<Container>
			<Title>회사정보</Title>
			<ContactInfoContentWrapper>
				<Content style={{ marginBottom: 5 }}>업체명: 경성양꼬치</Content>
				<Content>담당자: 010-1234-5678</Content>
			</ContactInfoContentWrapper>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 40px;
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const ContactInfoContentWrapper = styled.div``;
const Content = styled.div``;