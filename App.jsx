import React ,{useState} from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"


function App () {

    //to add in array notes and update it

    const [notes,setNotes] = useState([]);



    //will recieve the note from CretaArea and will add

function addNote (Newnote) {

    setNotes(prevVAlues => {
        return [...prevVAlues,Newnote]  //added the new note and previos notes
    })

}

function deleteNote (id) {

    setNotes(prevNotes => {
        return prevNotes.filter((noteItem,index) =>{

            return index !==id;

        })
    })

}




    return  (
    <div>

    <Header/>
    <CreateArea
        onAdd={addNote} //an object will call in CreateArea catch via props
    />

    {notes.map((noteItem,index) => {
        return <Note
        key={index}
        id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />

    })};
    
    <Footer/>
    
        </div>
    );
    




}
export default App;