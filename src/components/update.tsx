import { RefObject, useEffect } from "react";
import { useClient } from "../context/apolloContext";
import { GET_BOOKS, UPDATE_BOOK, formDefault } from "../utils/var";
import { useMutation } from "@apollo/client";

export default function UpdateBook() {
  const { updateRef, selectedBook, setForm, form } = useClient();
  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
useEffect(() => {
    const autoComplete = {
        id: selectedBook?.id ?? "",
        title: selectedBook?.title ?? "",
        author: selectedBook?.author ?? ""
    }
    setForm({...autoComplete});
},[selectedBook])

  function handleChange(event: any) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    updateBook({ variables: { ...form, id: selectedBook?.id } });
    setForm(formDefault);
    updateRef?.current?.close();
  }

  return (
    <dialog ref={updateRef as RefObject<HTMLDialogElement>}>
      <form onSubmit={handleSubmit}>
        <h1>Update Book</h1>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <button type="submit">Update</button>
      </form>
    </dialog>
  );
}
