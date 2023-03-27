import styled, { css } from 'styled-components';
import { jobTableConstant } from '../../../constant/constant';
import JobContent from './job_content';

const data = [
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: {
			title: '미스사이공 주방직원 급구asdasdas미스사이공 주방직원',
			is_premium: 1,
		},
		salary: { wage: '2,000,000원', way: 'monthly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 1,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '100,000원', way: 'daily' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 1 },
		salary: { wage: '500,000원', way: 'weekly' },
		category: '요식업',
	},
	{
		job_opening_no: 1,
		is_premium: 0,
		region: '서울시 중구',
		title: { title: '미스사이공 주방직원 급구', is_premium: 0 },
		salary: { wage: '8,000원', way: 'hourly' },
		category: '요식업',
	},
];

export default function JobTable() {
	const ThElement = Object.values(jobTableConstant);

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
				<JobContent content={data} />
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
