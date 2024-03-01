import { useMutation } from "@apollo/client";
import { GET_BOOKS, REMOVE_BOOK } from "../utils/var";
import { useClient } from "../context/apolloContext";
import { RefObject } from "react";



export default function RemoveBook(){
    const {removeRef,selectedBook} = useClient();
    const id = selectedBook?.id as string
    const [removeBook] = useMutation(REMOVE_BOOK, {
        refetchQueries: [{ query: GET_BOOKS }]
    });

    function handleRemove(id: string){
        removeBook({ variables: { id } });
        removeRef?.current?.close()
    }

     return(
        <dialog ref={removeRef as RefObject<HTMLDialogElement> }>
        <nav>
            <button onClick={() => handleRemove(id)}>Remove</button>
            <button onClick={()=> removeRef?.current?.close()} >Cancelar</button>
        </nav>
    </dialog>
     )
     
}