import { Button, Card, Form, Input, InputNumber, Radio, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StudentType } from '../student-manage/index'

const { Item: FormItem } = Form
const { TextArea } = Input
const { Group: RadioGroup } = Radio

type FormType = {
  name: string
  tender: number
  age: number
  description: string
}

const StudentCreate: React.FC = () => {
  const [form] = useForm<FormType>()
  const [search] = useSearchParams()

  const navigate = useNavigate()

  // 钩子函数，进入页面时如果有 id，说明是编辑入口点击进来的，需要拉取具体这一条数据，回填表单
  React.useEffect(() => {
    const id = search.get('id')
    if (id) {
      axios.get('/api/student.json').then((res) => {
        const item = res.data.data.find((it: StudentType) => it.key === id)
        console.log({ item });
        form.setFieldsValue({ ...item, tender: String(item.tender) })
      })
      // 如果没有 说明是添加情况，表单置空，性别默认一个 
    } else {
      form.resetFields()
      form.setFieldValue('tender', '1')
    }
  }, [form, search])

  const handleSubmit = async (values: FormType) => {
    const items = await form.validateFields()

    const id = search.get('id')
    if (id) {
      // 如果有 id 说明为编辑情况
      // 传递 items 参数
      // 此处只为模拟
      console.log(items)
      axios.get('/api/student.json').then(() => {
        message.success('编辑成功')
        navigate('/student')
      })
    } else {
      // 没有 id 说明是添加信息
      // 传递 items 参数
      // 此处只为模拟
      console.log(items)
      axios.get('/api/student.json').then(() => {
        message.success('添加成功')
        navigate('/student')
      })
    }
  }

  return <Card style={{ paddingLeft: 50 }} title="新建学生">
    <Form style={{ width: 800 }} form={form} onFinish={handleSubmit}>
      <FormItem name="name" label="姓名" required rules={[{ required: true, message: '请输入姓名' }]}>
        <Input></Input>
      </FormItem>
      <FormItem name="tender" label="性别" required rules={[{ required: true, message: '请输入性别' }]}>
        <RadioGroup>
          <Radio value="1">男</Radio>
          <Radio value="2">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem name="age" label="年龄" required rules={[{ required: true, message: '请输入年龄' }]}>
        <InputNumber />
      </FormItem>
      <FormItem name="description" label="描述">
        <TextArea></TextArea>
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">提交</Button>
      </FormItem>
    </Form>
  </Card>
}

export default StudentCreate