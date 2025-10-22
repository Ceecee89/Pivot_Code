//import brings in other files
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TaskList from './components/TaskList.jsx'
// creating a component
function App(){
  //return html, one parent
  return(
    <>
    <Header />
    <TaskList />
    <Footer />
</>
  )
}
// give it permision to leave
export default App;
