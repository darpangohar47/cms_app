import React, { useEffect, useState } from 'react'

function AdminContact() {
    const [contacts, setContacts] = useState([]);
    useEffect( () => {
     fetch('http://127.0.0.1:3000/v1/contact').then((res)=>res.json()).then((res)=>{
        console.log(res.contacts)
        setContacts(res.contacts)})
        
    }, [])
    
  return (
    <div>
        <h2>Contacts </h2>
      <table>
        <tbody>
        <tr>
            <th>
                Full Name
            </th>
            <th>
                Email Address
            </th>
            <th>
                Mobile Number
            </th>
            <th>
                City
            </th>
        </tr>

        {contacts.map((item, index) => {
            console.log(item)
            return (
                <tr>
                <td>
                {item.fullname}
            </td>
            <td>
            {item.email}
            </td>
            <td>
            {item.mobile}
            </td>
            <td>
            {item.city}
            </td>
        </tr>
            )
            
            
            
            })}
        </tbody>
        
        

            
                
            
        
      </table>
    </div>
  )
}

export default AdminContact
