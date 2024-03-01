import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  useState,
} from "react";
import IBook from "../DTO/book";
import { formDefault } from "../utils/var";

interface ClientContextType {
  modalRef: React.RefObject<HTMLDialogElement | undefined>;
  removeRef: React.RefObject<HTMLDialogElement | undefined>;
  updateRef: React.RefObject<HTMLDialogElement | undefined>;
  selectedBook: IBook | null;
  setSelectedBook: React.Dispatch<React.SetStateAction<IBook | null>>;
  form: IBook;
  setForm: React.Dispatch<React.SetStateAction<IBook>>;
}

interface ClientProviderProps {
  children: ReactNode;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const modalRef = useRef<HTMLDialogElement>();
  const removeRef = useRef<HTMLDialogElement>();
  const updateRef = useRef<HTMLDialogElement>();

  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [form, setForm] = useState<IBook>(formDefault);
 
  const clientContextValue: ClientContextType = {
    modalRef,
    removeRef,
    updateRef,  
    selectedBook,
    form,
    setSelectedBook,
    setForm
  };

  return (
    <ClientContext.Provider value={clientContextValue}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }
  return context;
};
