
import UserContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";
import UserProfile from "./components/UserProfile";
function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };
  return (
    
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile />
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
      
  );
}

  

 
   
  

export default App;
