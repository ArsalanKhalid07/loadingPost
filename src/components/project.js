import React from 'react'

export default function Project(props) {
    return (
        <div className="service-one">
                <p className="service-icon"><i className="far fa-sticky-note"></i></p>
                <p className="service-title">{props.Pro}</p>
                <p>{props.Description}</p>
        </div>
    )
}
