import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import wageTermFunction from '../../../utils/wageConfig';

interface IWageBox {
	termIndex: number;
}

interface IContrainerProps {
	$boxColor: string;
	$boxFontColor: string;
	$borderColor: string;
}

export default function WageBox({ termIndex }: IWageBox) {
	const { boxFontColor, boxColor, borderColor, value } =
		wageTermFunction(termIndex);
	const { t } = useTranslation();
	return (
		<Container
			$boxColor={boxColor}
			$boxFontColor={boxFontColor}
			$borderColor={borderColor}
		>
			{t(`jobTable:${value}`)}
		</Container>
	);
}

const Container = styled.div<IContrainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2px 4px;
	background: ${({ $boxColor }) => $boxColor};
	border: 1px solid ${({ $borderColor }) => $borderColor};
	border-radius: 4px;
	color: ${({ $boxFontColor }) => $boxFontColor};
	font-size: 12px;
`;
