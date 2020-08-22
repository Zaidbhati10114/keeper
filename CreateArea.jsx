import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea (props) {

//get hold of input
    const [note, setNote] = useState({
        title:"",
        content:""
    })



function handleChange(event) {

    const {name,value} = event.target;

    setNote(prevValue => {
       return {
        ...prevValue, //previous value and new value gets added
        [name]:value
       }
    })

}

function submitNote (event) {

    props.onAdd(note) //function will trigger on Add
    setNote({
        title:"",
        content:""
    })
event.preventDefault(); //to prevent refresh the page

}


    return (
        <div>
            <form className="create-note">
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title"  />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
                <Zoom in={true}>
                <Fab onClick={submitNote}>
                <AddIcon/>
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}
export  default CreateArea;