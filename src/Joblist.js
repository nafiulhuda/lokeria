import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';


const JobList = () => {
    const [job, setJob] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    


    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get(
            "https://dev-example.sanbercloud.com/api/job-vacancy"
        )

        setJob(response.data.data)
    }

    const filteredJobs = job.filter((jobItem) =>
         jobItem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const SearchResults = () => {
        return filteredJobs.map((jobItem, i) => (
            <div className="Job-list-wrapper">
                <div className='Job-wrapper' key={jobItem.id}>
                    <div className="Job-box1">
                        <img className='Job-image' src={jobItem.company_image_url} alt=''/>
                    </div>
                    <div className="Job-box2">
                        <div className='Job-title'>
                            <Link  to={`/vacancy/${jobItem.id}`}>{jobItem.title}</Link>
                        </div>
                        <div className='Job-company-name'>{jobItem.company_name}</div>
                    </div>
                </div>
            </div>
        ));
      };
      


    console.log(job)
    return (
        <>
        <div className="Header-joblist">
            <h1>Open Vacancy Job</h1>
                <p>Explore the job that suits to you</p>
        </div>
        <div>
        <div className="Job-search">
            <input
            type="text"
            placeholder="Search job..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        
        </div>

        <div className="Job-container">
            <SearchResults/>
        </div>
        
        </>
        

    )
}

export default JobList