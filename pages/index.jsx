import { useState } from 'react';
import { Row, Col, Select, Button, Space, Table, Tag, Typography } from 'antd';
const { Option } = Select;
const { Title } = Typography;
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Layout from 'src/components/common/Layout';
import BannerCarousel from 'src/components/common/BannerCarousel';

const Wrapper = styled.div`
  .ant-card-body {
    padding: 5px 20px;
  }
`;
const columns = [
  // {
  //   title: '공고',
  //   dataIndex: 'is_premium',
  //   key: 'is_premium',
  //   width: 100,
  //   render: (text) => {
  //     return text === 1 ? (
  //       <span style={{ color: '#FF0000', fontWeight: 'bold' }}>PREMIUM</span>
  //     ) : (
  //       <span></span>
  //     );
  //   },
  // },
  {
    title: '지역',
    dataIndex: 'region',
    key: 'region',
    width: 50,
    ellipsis: true,
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
    // width: '10%',
    render: (item) =>
      item.is_premium === 1 ? (
        <span>
          {/* <Tag color="red">PREMIUM </Tag> */}
          {item.title}
        </span>
      ) : (
        <span>{item.title}</span>
      ),
    width: 100,
    ellipsis: true,
  },
  {
    title: '급여',
    key: 'salary',
    dataIndex: 'salary',
    render: (item) => {
      if (item.way === 'monthly') {
        return (
          <div>
            <Tag color="magenta">월급</Tag>
            <span>{item.wage}</span>
          </div>
        );
      } else if (item.way === 'weekly') {
        return (
          <div>
            <Tag color="gold">주급</Tag>
            <span>{item.wage}</span>
          </div>
        );
      } else if (item.way === 'daily') {
        return (
          <div>
            <Tag color="blue">일급</Tag>
            <span>{item.wage}</span>
          </div>
        );
      } else if (item.way === 'hourly') {
        return (
          <div>
            <Tag color="purple">시급</Tag>
            <span>{item.wage}</span>
          </div>
        );
      }
    },
    width: 100,
    // ellipsis: true,
  },
  {
    title: '직무',
    key: 'category',
    dataIndex: 'category',
    width: 100,
    // ellipsis: true,
  },
  // {
  //   title: '',
  //   render: () => <Button type="primary">지원하기</Button>,
  //   ellipsis: true,
  // },
];
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
];
export default function Home({}) {
  const [region, setRegion] = useState([
    { region_no: 1, region_name: '부천시 원미구' },
    { region_no: 2, region_name: '부천시 소사구' },
  ]);
  return (
    <Layout>
      <Wrapper>
        <Row>
          <Col span={24} style={{ padding: '20px 25px' }}>
            <BannerCarousel />
          </Col>
        </Row>
        <Row justify="center" gutter={12}>
          <Col>
            <Select
              showSearch
              placeholder="시/도 선택"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {region.map((item) => (
                <Option value={item.region_no}>{item.region_name}</Option>
              ))}
            </Select>
          </Col>
          <Col>
            <Select
              showSearch
              placeholder="상세 선택"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {region.map((item) => (
                <Option value={item.region_no}>{item.region_name}</Option>
              ))}
            </Select>
          </Col>
          <Col>
            <Select
              showSearch
              placeholder="직무 선택"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {region.map((item) => (
                <Option value={item.region_no}>{item.region_name}</Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Col>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              style={{ width: '330px', borderRadius: '10px' }}
            >
              검색
            </Button>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              // title={() => <Title level={3}>채용공고</Title>}
              pagination={{ position: ['bottomCenter'] }}
              scroll={{ x: '1024px' }}
              // column={{ fixed: true }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              // title={() => <Title level={3}>채용공고</Title>}
              pagination={{ position: ['bottomCenter'] }}
              scroll={{ x: '1024px' }}
              // column={{ fixed: true }}
            />
          </Col>
        </Row>
      </Wrapper>
    </Layout>
  );
}
