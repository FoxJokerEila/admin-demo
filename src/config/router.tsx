import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Goods from '../pages/Goods'
import About from '../pages/About'
import StudentManage from '../pages/student/student-manage';
import StudentCreate from '../pages/student/student-create';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="goods" element={<Goods />} />
          <Route path="about" element={<About />} />
          <Route path='student' element={<StudentManage />}>
          </Route>
          <Route path='student_create' element={<StudentCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}