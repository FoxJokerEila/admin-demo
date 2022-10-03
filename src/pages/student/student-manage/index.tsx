import { Button, Card, Form, message, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Item: FormItem } = Form

export type StudentType = {
  key: string
  name: string;
  tender: number;
  age: number;
  description: string;
}

const StudentManage: React.FC = () => {
  const navigate = useNavigate()
  const [dataSource, setData] = React.useState<StudentType[]>()

  const handleSubmit = (values: { name: string }) => {
    axios.get('/api/student.json').then(res => {
      if (values.name === '' || values.name === undefined) {
        setData(res.data.data)
        return
      }
      setData(res.data.data.filter((it: StudentType) => it.name.indexOf(values.name) !== -1))
    })
  }

  // 刚进入页面进行一个默认搜索，拉取列表
  React.useEffect(() => {
    handleSubmit({ name: '' })
  }, [])

  // 删除某一条
  const handleDel = (key: string) => {
    axios.get('/api/student.json').then((res) => {
      setData((pre) => pre && pre.filter((it: StudentType) => it.key !== key))
      message.success('删除成功')
    })
  }

  const columns: ColumnsType<StudentType> = [
    {
      dataIndex: 'name',
      key: 'name',
      title: '姓名',
    },
    {
      dataIndex: 'tender',
      key: 'tender',
      title: '性别',
      render: (value) => {
        return value === 1 ? '男' : '女'
      }
    },
    {
      dataIndex: 'age',
      key: 'age',
      title: '年龄',
    },
    {
      dataIndex: 'description',
      key: 'description',
      title: '描述',
    },
    {
      key: 'operate',
      title: '操作',
      render: (_, row) => {
        return <>
          <Button type="link">
            <NavLink to={'/student_create?id=' + row.key}>
              编辑
            </NavLink>
          </Button>
          <Popconfirm
            title="确认删除该学生吗？"
            onConfirm={() => handleDel(row.key)}
            // onCancel={cancel}
            okText="确认"
            cancelText="取消"
          >
            <Button type="link">删除</Button>
          </Popconfirm >
        </>
      }
    }
  ]


  return <Card title="学生管理" extra={<Button type="primary" onClick={() => navigate('/student_create')}>新建学生</Button>}>
    <Form layout="inline" onFinish={handleSubmit}>
      <FormItem key="name" name="name" label="姓名"><input /></FormItem>
      <FormItem>
        <Button htmlType="submit" type="primary">搜索</Button>
      </FormItem>
    </Form>
    <Table dataSource={dataSource} columns={columns}></Table>
  </Card>

}

export default StudentManage