import React from 'react'
import award1 from "../../../../images_new/img/awards-1.png"
import award2 from "../../../../images_new/img/awards-2.png"
import award3 from "../../../../images_new/img/awards-3.png"
import award4 from "../../../../images_new/img/awards-4.png"
const AwardSection = () => {
  return (
    <div className="gap">
      <div className="container">
        <h3 className="awards">Empresa ganadora de premios</h3>
        <div className="awards">
          <img src={award1} alt="awards 1" />
          <img src={award2} alt="awards 2" />
          <img src={award3} alt="awards 3" />
          <img src={award4} alt="awards 4" />
        </div>
      </div>
    </div>
  )
}

export default AwardSection
