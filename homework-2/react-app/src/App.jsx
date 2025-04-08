
import './App.css'
import { Parent } from './components/FamilyTree/parent'
import { ListItem } from './components/listItem/listItem'
import UserProfileClass from './components/userProfile/userProfileClass'
import { UserProfileFunction } from './components/userProfile/userProfileFunction'

function App() {
  const family = {
    name: "John (Parent)",
    children: [
        {
            name: "Alex (Child)",
            age: 30,
            grandchildren: [
                { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
                { name: "Sophia (Grandchild)", hobby: "Drawing" },
            ],
        },
        {
            name: "Emma (Child)",
            age: 28,
            grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
        },
    ],
}
 return(
  <>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <UserProfileClass name="Martina" age={27} hobby="Hiking" />
    <UserProfileFunction name="Jasmina" age={22} hobby="Baking" />
  </div>
  <div>
    <ListItem />
    <br />
    <Parent family={family}/>
  </div>
  </>
 )
}

export default App
