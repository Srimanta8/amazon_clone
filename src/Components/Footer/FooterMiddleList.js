import React from 'react'

function FooterMiddleList({title, listItem}) {
  return (
    <div className='w-full'>
            <h3 className="h3links">{title}</h3>
            <ul className="ul-links">
              {
                listItem.map((item)=>item.listData.map((data,i)=>(
                    <li key={i} className='listLinks'>{data}</li>
                )))
              }
            </ul>
          </div>

  )
}

export default FooterMiddleList