import styled from 'styled-components';
import Layout from '../src/components/common/Layout';
import HomeFilter from '../src/components/home/filter';
import JobTable from '../src/components/home/job_table';
// import prisma from '../src/lib/prisma';
import { Posting } from '../src/models/posting';

export default function Home({ data }) {
	return (
		<Layout pageIndex={0}>
			<Container>
				<HomeFilter />
				<JobTable tableContent={data} />
			</Container>
		</Layout>
	);
}

const Container = styled.div``;

export async function getServerSideProps(context) {
	const data = await Posting.getPostingList();
	return {
		props: {
			data,
		},
	};
}
