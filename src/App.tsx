import { AddNewItem } from "./AddNewItem"
import { Column } from "./Column"
import { AppContainer } from "./styles"
import { useAppState } from "./state/AppStateContext";

const App = () => {
  const {state} = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i)=>(
        <Column text = {list.text} key={list.id} index={i}/>
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
