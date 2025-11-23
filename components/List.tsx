import React from 'react'

interface ContentItem {
  heading: string;
  detail: string;
}

interface ContentProps {
  content: ContentItem[];
}


const List = ({content}:ContentProps) => {
  return (
    <div>
        {content.map((item, index) => (
            <div key={index} className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
                <p className="text-gray-400 whitespace-pre-line">{item.detail}</p>
            </div>
        ))}
    </div>
  )
}

export default List 