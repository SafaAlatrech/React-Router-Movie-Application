import React, { useState } from 'react'
import Modal from 'react-modal';
import Startrating from './Startrating';

const AddMovie = ({handleadd}) => {
    const [form,setForm]= useState(
        {
           name: "",
           date:"",
           image:"",
           rating:1,
        }
    );
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const handlesubmit=(e) => {
          e.preventDefault();
        let newmovie = {
            ...form, id:Math.random(),}
            handleadd(newmovie);
            setForm(
                {
                    name: "",
                    date:"",
                    image:"",
                    rating:1,
                 }

            )
            closeModal();
        }
        const handlechange = (e) => {
            setForm({...form,[e.target.name]:e.target.value})
          
        }
        const handlerate=(newrate) => {
          setForm({...form,rating:newrate})
        }
        
      
      const [modalIsOpen, setIsOpen] = useState(false);
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div>
      <button className="btn add-movie-btn" onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handlesubmit}>
          <label for="">Name Movie</label>
          <input type="text" name='name' onChange={handlechange} required/>
          <label for="">PosterURL</label>
          <input type="url" name='image' onChange={handlechange} required/>
          <label for="">Date</label>
          <input type="date" name='date' onChange={handlechange}required/>
          <label for="">Rate</label>
          <Startrating  rate={form.rating} handlerate={handlerate} />
          <button className="btn btn-primary">Add</button>
          <button className="btn btn-danger" onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddMovie

