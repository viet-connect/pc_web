import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { jobTableConstant } from '../../../constant/constant';
import { selectedRegionState } from '../../../recoil/atom/region';
import JobContent from './job_content';

const data = [
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 2,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 3,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 4,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 5,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 6,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 7,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 8,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 9,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 10,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 11,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 12,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 13,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 14,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 15,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 16,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 17,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 18,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 19,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 20,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 21,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 22,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 23,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 24,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 25,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 26,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 27,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 28,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 29,
		is_premium: 1,
		region: '서울특별시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 30,
		is_premium: 1,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 31,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 32,
		is_premium: 0,
		region: '서울특별시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
];

export default function JobTable() {
	const ThElement = Object.values(jobTableConstant);
	const selectedRegionArray = useRecoilValue(selectedRegionState);
	const selectedRegion = selectedRegionArray[0].concat(
		` ${selectedRegionArray[1]}`,
	);

	const comparableData = [];
	for (let i = 0; i < data.length; i += 1) {
		if (data[i].region === selectedRegion) {
			comparableData.push(data[i]);
		}
	}

	return (
		<Container>
			<TableWrapper>
				<colgroup>
					{ThElement.map((el) => (
						<col key={el.renderingTitle} width={el.width} />
					))}
				</colgroup>
				<Thead>
					<Tr>
						{ThElement.map((el, index) =>
							index < 3 ? (
								<Th key={el.renderingTitle}>{el.renderingTitle}</Th>
							) : (
								<Th key={el.renderingTitle} DivideNotExist>
									{el.renderingTitle}
								</Th>
							),
						)}
					</Tr>
				</Thead>
				<JobContent content={comparableData} />
			</TableWrapper>
		</Container>
	);
}

const Container = styled.div`
	margin-top: 20px;
`;

const TableWrapper = styled.table`
	table-layout: fixed;
	width: 1024px;
	min-width: 100%;
`;

const Thead = styled.thead`
	box-sizing: border-box;
	background-color: #f7f7f7;
`;

const Tr = styled.tr``;

interface IThProps {
	DivideNotExist?: boolean;
}

const Th = styled.th<IThProps>`
	box-sizing: border-box;
	padding: 16px;
	text-align: start;
	position: relative;
	color: rgba(0, 0, 0, 0.88);
	border-bottom: 1px solid #f0f0f0;
	font-size: 14px;

	${(props) =>
		!props.DivideNotExist &&
		css`
			&:before {
				content: '';
				background-color: #ffba10;
				position: absolute;
				top: 50%;
				inset-inline-end: 0;
				width: 1px;
				height: 1.6em;
				background-color: #e9d7d75c;
				transform: translateY(-50%);
				transition: background-color 0.2s;
			}
		`}
`;
