import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return (
        <div className="text-3xl text-center text-white bg-gray-500 p-5">Github Followers:{data.followers}
            <img src={data.avatar_url} alt="git prpfile picture" width={300} />
        </div>
    )
}

export default Github;
export const githubinfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}