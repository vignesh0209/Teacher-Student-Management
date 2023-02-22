import React from 'react';

const Read = ({shows}) => {

  
  return (
    <>
      {shows.map((li,index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{li.name}</td>
          <td>{li.pass}</td>
        </tr>
      ))}
    </>
  );
}

export default Read;