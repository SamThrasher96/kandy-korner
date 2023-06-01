import { useEffect, useState } from "react"
import "./locations.css"


export const LocationList = () => {
    const [locations, setLocation] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocation(locationArray)
                })
        },

        []
    )

return <>
    <h2>List of location</h2>

<article className = "locations">
    {
    locations.map(
            (location) => {
                return <section className="location" key={location.id}>
                    <header>{location.name}</header>
                    <header>{location.address}</header>
                    <footer>Square Footage: {location.squareFootage}</footer>
                </section>
            }
        )
    }
</article>
</>
}