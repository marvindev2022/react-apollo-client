import AddBook from "./components/create";
import Table from "./components/table";
import { useClient } from "./context/apolloContext";

export default function App() {
  const { modalRef } = useClient();

  return (
    <div className="W-full h-full flex flex-col justify-center items-center">
      <span >
        <h1 className="text-4xl">Adicionar novo livro</h1>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        Novo Livro
      </button>
      </span>
      <AddBook />
      <Table />
    </div>
  );
}
