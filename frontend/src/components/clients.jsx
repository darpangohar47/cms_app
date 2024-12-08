import React, { useEffect, useState } from 'react'
import { Button, Card } from 'antd';

const { Meta } = Card;
function Clients() {
    const [client, setClient] = useState([]);
    useEffect(() => {
        //fetch data from API
        fetch('http://127.0.0.1:3000/v1/client').then((res)=>{
          return res.json()
        }).then((res)=>{
          console.log(res)
          setClient(res.clients);
        })
      
        
      }, [])
      
    return (
        <div>
            Our Clients:
            <div className='horizontal_scroll'>

            {
                client.map((item, index) => { 
                    return(

                        <Card
                          hoverable
                          style={{ width: 240 ,margin:"1rem" }}
                          cover={<img alt="example" src={item.image} />}
                        >
                          <Meta title={item.name} description={item.description}/>
                          <p>{item.designation}</p>
                        </Card>
      )
                    
                })
            }
            </div>
        </div>
    )
}

export default Clients
