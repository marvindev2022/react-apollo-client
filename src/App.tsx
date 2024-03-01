import AddBook from './components/create';
import Table from './components/table';
import { useClient } from './context/apolloContext';


export default function App() {
 const {modalRef} = useClient();

  return (
    <div>
      <button onClick={() => {
        modalRef.current?.showModal();
        console.log(modalRef.current);
      }}>Add Book</button>
      <AddBook  />
     <Table/>
    </div>
  );
}
