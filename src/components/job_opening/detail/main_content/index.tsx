import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import CommonUtils from '../../../../utils/commonUtils';

export default function MainContent({ data }) {
	const { t } = useTranslation();
	const {
		gender: _gender,
		proficiency: _proficiency,
		workingDay,
		isDayNegotiable,
		isTimeNegotiable,
		startingTime,
		endingTime,
		contents,
	} = data;

	const workDayArr = JSON.parse(workingDay);
	const convertedWorkDays = workDayArr.map((el) => {
		const workDay = CommonUtils.DayConverter(el);
		return t(`posting:${workDay}`);
	});
	const workDayString = convertedWorkDays.join(', ');
	const gender = CommonUtils.genderConverter(_gender);
	const proficiency = CommonUtils.proficiencyConverter(_proficiency);

	return (
		<Container>
			<InfoWrapper style={{ marginBottom: 20 }}>
				<Title>{t('detail:recruitCondition')}</Title>
				<FirstContentWrapper>
					{/* <HeadCount>모집인원: 2명</HeadCount> */}
					<Gender>
						{t('detail:recruitmentGender')}: {t(`posting:${gender}`)}
					</Gender>
					<Proficiency>
						{t('posting:koLangSkill')}: {t(`posting:${proficiency}`)}
					</Proficiency>
				</FirstContentWrapper>
			</InfoWrapper>
			<InfoWrapper style={{ marginBottom: 20 }}>
				<Title>{t('detail:workingCondition')}</Title>
				<SecondContentWrapper>
					<WorkingDay>
						<div>{t('detail:workingDay')} :</div>
						<div style={{ marginLeft: 5 }}>
							<div>
								<div>
									{`${t('detail:workingDayPrefix')} ${workDayArr.length}${t(
										'detail:workingDaySuffix',
									)}`}
								</div>
								<div>{workDayString}</div>
							</div>
							<div>{isTimeNegotiable && `(${t('detail:negotiable')})`}</div>
						</div>
					</WorkingDay>
					<WorkingHour>
						<div>{t('detail:workingHour')} :</div>
						<div style={{ marginLeft: 5 }}>
							<div>
								{startingTime} ~ {endingTime}
							</div>
							<div>{isTimeNegotiable && `(${t('detail:negotiable')})`}</div>
						</div>
					</WorkingHour>
				</SecondContentWrapper>
			</InfoWrapper>
			<InfoWrapper>
				<Title>{t('detail:workInformation')}</Title>
				<DescriptionWrapper disabled defaultValue={contents} />
			</InfoWrapper>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 10px;
`;

const InfoWrapper = styled.div``;

const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
	color: black;
`;

const FirstContentWrapper = styled.div`
	display: flex;
`;

const SecondContentWrapper = styled.div``;

const Gender = styled.div`
	margin-right: 30px;
`;

const Proficiency = styled.div``;

const WorkingDay = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

const WorkingHour = styled.div`
	display: flex;
	align-items: flex-end;
`;
const DescriptionWrapper = styled.textarea`
	border: solid 1px rgba(128, 128, 128, 0.5);
	border-radius: 6px;
	width: 100%;
	height: 150px;
	white-space: pre-wrap;
	font-size: 16px;
	color: black;
`;
