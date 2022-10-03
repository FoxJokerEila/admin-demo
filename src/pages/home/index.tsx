import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
const { Header, Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: '关于',
    key: 'about',
  },
  {
    label: 'Goods',
    key: 'goods',
  },
  {
    label: '学生管理',
    key: 'student',
  },
]

const Home: React.FC = () => {
  const navigate = useNavigate()
  return <Layout style={{ height: '100vh' }}>
    <Header style={{ padding: '0 25px' }}><Menu onClick={({ key }) => navigate(key)} items={items} mode="horizontal">
    </Menu></Header>
    <Content> <Outlet /></Content>
  </Layout>
}

export default Home