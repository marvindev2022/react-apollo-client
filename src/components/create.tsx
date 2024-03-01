import { useMutation } from '@apollo/client';
import { ADD_BOOK, formDefault, GET_BOOKS } from '../utils/var';
import { useState } from 'react';
import { useClient } from '../context/apolloContext';
import { RefObject } from 'react';
import IBook from '../DTO/book';


export default function AddBook(): JSX.Element{
    const { modalRef } = useClient();
    const [form, setForm] = useState<IBook>(formDefault);

    const [addBook] = useMutation(ADD_BOOK, {
        refetchQueries: [{ query: GET_BOOKS }] 
    });

    function handleChange(event: any){
        setForm({...form, [event.target.name]: event.target.value});
    }

    function handleSubmit(event: any){
        event.preventDefault();
        addBook({ variables: form });
        setForm(formDefault);
        modalRef?.current?.close();
    }

    return (
        <dialog ref={modalRef as RefObject<HTMLDialogElement>}>
            <form onSubmit={handleSubmit}>
                <h1>Add Book</h1>
                <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
                <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Author" />
                <button type="submit">Add</button>
            </form>
        </dialog>
    );
}
