import React from 'react'

const HomeHeader = () => {
  return (
    <div
    className="mt-5 rounded d-flex justify-content-center align-items-center position-relative"
    style={{
        height: "50vh",
    }}
>
    {/* Background Layer */}
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('https://media.licdn.com/dms/image/v2/C4D1BAQFudQue7N513A/company-background_10000/company-background_10000/0/1583659912738/allianzrealestate_cover?e=2147483647&v=beta&t=Bwe3gzjzokFx8k6OF_F9lTHY8xzZ_l1VI6M2ZOeWMhk')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: 0,
            borderRadius: "inherit", // Matches the parent border radius
        }}
    ></div>


    <div className="input-group mb-3 w-75">
        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button className="btn btn-success" type="button" id="button-addon2">Button</button>
    </div>
</div>
  )
}

export default HomeHeader