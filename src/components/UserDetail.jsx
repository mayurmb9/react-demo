import React from 'react'
import { useParams } from 'react-router';

export default function() {
  const params = useParams();
  console.log(params);
  return (
    <div style={{padding:"1rem"}}>
        <h2>User Detail</h2>
        <h3>User Id :- {params.id}</h3>
    </div>
  )
}
