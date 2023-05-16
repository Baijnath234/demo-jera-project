import React from 'react'
import '../stories/assets/scss/_card.scss'


interface CardProps  {
    Heading: string,
    Paragraph: string
}

export const Card = ({Heading, Paragraph}:CardProps) => {
  return (
    <div className="uk-card">
    <h3 className="uk-card-title color-white">{Heading}</h3>
    {Paragraph}
  </div>
  )
}