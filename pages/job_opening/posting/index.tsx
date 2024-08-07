import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../../src/components/common/Layout';
import JobOpeningPostingFirstPart from '../../../src/components/job_opening/posting/first_part';
import JobOpeningPostingThirdPart from '../../../src/components/job_opening/posting/third_part';
import JobOpeningPostingFourthPart from '../../../src/components/job_opening/posting/fourth_part';
import { Posting } from '../../../src/models/posting';
import { inputPostingState } from '../../../src/recoil/atom/posting';
import GoogleAd from '../../../src/components/common/GoogleAd';
import MetaHead from '../../../src/components/common/MetaHead';

/*
	First: 공고제목, 업체명, 연락처
	Third: 급여, 성별, 한국어능숙도, 날짜, 시간
	Fourth: 상세정보, 근무장소
*/
export default function JobOpeningPosting({ data }) {
  const { t } = useTranslation();
  const [newJobPosting, setNewJobPosting] = useRecoilState(inputPostingState);
  const [adminState, setAdminState] = useState('');

  useEffect(() => {
    if (data) {
      const addressArray = data.address.split(' ');
      const subAddress = addressArray.pop();
      const isAdmin = localStorage.getItem(process.env.NEXT_PUBLIC_ADMIN_KEY);

      setAdminState(isAdmin);
      setNewJobPosting({
        ...newJobPosting,
        title: data.title,
        contact_name: data.contactName,
        contact_number: data.contactNumber,
        wage_type: data.wageType,
        wage_amount: data.wageAmount,
        gender: data.gender,
        proficiency: data.proficiency,
        working_day: [...JSON.parse(data.workingDay)],
        is_day_negotiable: data.isDayNegotiable,
        starting_time: data.startingTime,
        ending_time: data.endingTime,
        is_time_negotiable: data.isTimeNegotiable,
        contents: data.contents,
        address: {
          full: data.address,
          main: addressArray.join(' '),
          sub: subAddress,
        },
        password: isAdmin === process.env.NEXT_PUBLIC_ADMIN_KEY_VALUE ? data.password : '',
        premium: data.premium,
      });
    }

    return () => {
      setNewJobPosting({
        title: '',
        contact_name: '',
        contact_number: '',
        wage_type: 'monthly',
        wage_amount: '',
        gender: null,
        proficiency: null,
        working_day: [],
        is_day_negotiable: false,
        starting_time: '09:00',
        ending_time: '18:00',
        is_time_negotiable: false,
        contents: '',
        address: {
          full: '',
          main: '',
          sub: '',
        },
        password: '',
        view_count: 0,
        authorId: '',
        premium: false,
      });
    };
  }, []);

  return (
    <Layout pageIndex={1}>
      <MetaHead title={`: ${t('navigation:jobOpening')}`} />
      <Container>
        <Title>{t('posting:jobOpening')}</Title>
        <JobOpeningPostingFirstPart data={data} />
        {/* <JobOpeningPostingSecondPart /> */}
        <JobOpeningPostingThirdPart data={data} />
        <JobOpeningPostingFourthPart data={data} isAdmin={adminState} />
        <GoogleAd />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  margin: 20px 0 35px 0;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export async function getServerSideProps(context) {
  const i18n = ['common', 'detail', 'jobTable', 'navigation', 'opening', 'posting', 'login'];
  const translation = await serverSideTranslations(context.locale, i18n);

  let data = null;
  if (context.query.id) data = await Posting.getUniquePosting(context.query.id);
  return { props: { data, ...translation } };
}
