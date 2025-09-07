
import './App.css'
import ProfilePage from './components/profilePage'


function App() {
  const userData = {name:'Jane Doe', email: 'jane.doe@example.com'}
  
return <UserContext.Povider value={userData}>
   <ProfilePage />
   </UserContext.Povider>
}

export default App
