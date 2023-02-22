import { Collapse } from 'bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Read from './Read';



 const getItem = () => {
   const data = localStorage.getItem("shows");
   if (data) {
     return JSON.parse(data);
   } else {
     return [];
   }
 };

const Create = () => {

    const [name,setName] = useState('');
    const [pass,setPass] = useState('');

    const [shows,setShows] = useState(getItem());

   



    const addItem = (e) => {
      e.preventDefault();

      let show = {
        name,
        pass
      }
      setShows([...shows,show]);
      setName('');
      setPass('');
    
       
       
    };

   useEffect(() => {
     localStorage.setItem('show',JSON.stringify(shows));
   },[shows])
  return (
    <>
      <form onSubmit={addItem}>
        <input
          type="email"
          placeholder="enter the gmail"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter the password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">ADD</button>
      </form>

      <div style={{margin:"50px"}}>
        {shows.length > 1 && (
          <>
            <table className='table'>
              <thead>
                <tr>
                  <th>s.no</th>
                  <th>Email</th>
                  <th>PassWord</th>
                </tr>
              </thead>
              <tbody>
                <Read shows={shows} />
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default Create