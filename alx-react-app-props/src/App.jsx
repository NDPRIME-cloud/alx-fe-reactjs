
import './App.css'
import ProfilePage from './components/profilePage'


function App() {
  const userData = {name:'Jane Doe', email: 'jane.doe@example.com'}
  
return <UserContext.povider value={userData}>
   <ProfilePage />
   </UserContext.povider>
}

export default App
