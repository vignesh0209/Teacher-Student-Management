import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './components/Create';
import TeacherCreate from './components/TeacherCreate';
import NavigationBar from './components/NavigationBar';
import TeacherTable from './components/TeacherTable';
import StudentCreate from './components/StudentCreate';
import Studenttable from './components/StudentTable';
import View from './components/View';


function App(){
  return(
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
                <Route path='view' element = {<View/>}/>
                <Route path='teachertable' element = {<TeacherTable/>}/>
                <Route path='studenttable' element = {<Studenttable/>}/>
            
                <Route path='create' element = {<Create/>}/>
                <Route path='teachercreate' element = {<TeacherCreate/>}/>
                <Route path='studentcreate' element = {<StudentCreate/>}/>
            
        </Routes>
      </BrowserRouter>
    </>
  )
} 

export default App;