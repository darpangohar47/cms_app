import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Card } from 'antd';

const { Meta } = Card;
function Project() {
  
    const [project, setProject] = useState([]);

    useEffect(() => {
      //fetch data from API
      fetch('http://127.0.0.1:3000/v1/project').then((res)=>{
        return res.json()
      }).then((res)=>{
        console.log(res)
        setProject(res.projects);
      })
    
      
    }, [])
    

    return (
        <div>
            Our Projects:
            <div className='horizontal_scroll'>

            {
                project.map((item, index) => { 
                  return(

                  <Card
                    hoverable
                    style={{ width: 240 ,margin:"1rem" }}
                    cover={<img alt="example" src={item.image} />}
                  >
                    <Meta title={item.name} description={item.description}/>
                    <Button>Read More</Button>
                  </Card>
)

                   
                })
            }
            </div>
        </div>
    )
  
}

export default Project
