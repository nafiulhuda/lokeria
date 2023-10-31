// import React from "react";
// import { useParams } from "react-router-dom";

// function Detail() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Detail Data #{id}</h1>
//       {/* Tampilkan detail data berdasarkan ID */}
//     </div>
//   );
// }

// export default Detail;

// -------------------------
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function JobDetail() {
//   const { id } = useParams();
//   const [job, setJob] = useState({});

//   useEffect(() => {
//     // Ambil data pekerjaan berdasarkan ID dari API
//     fetch(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
//       .then((response) => response.json())
//       .then((data) => setJob(data.data));
//   }, [id]);

//   if (!job) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Detail Pekerjaan</h1>
//       <h2>{job.title}</h2>
//       <p>{job.description}</p>
//       {/* Tampilkan informasi pekerjaan lainnya di sini */}
//     </div>
//   );
// }

// export default JobDetail;

// --------------------------
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JobDetail() {
  const params = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    // Ambil data pekerjaan berdasarkan ID dari API
    fetch(`https://dev-example.sanbercloud.com/api/job-vacancy/${params.id}`)
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [params]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='job-detail'>
      <h1 className='job-detail-title'>Detail Pekerjaan</h1>
      <h2>{job.title}</h2>
      <div className='company-name'>
        <p>{job.company_name}</p>
      </div>
      <div className='job-description'>
        <h4>Deskripsi Pekerjaan:</h4>
        <p>{job.job_description}</p>
      </div>
      <div className='job-qualification'>
        <h4>Kualifikasi Pekerjaan:</h4>
        <p>{job.job_qualification}</p>
      </div>
      <div className='job-type'>
        <h4>Tipe pekerjaan:</h4>
      <p>{job.job_type}</p>
      </div>
      <div className='job-tunure'>
        <h4>Masa jabatan:</h4>
      <p>{job.job_tenure}</p>
      </div>
      <div className='salary'>
        <h4>Perkiraan gaji</h4>
        <p>Rp. {job.salary_min}-{job.salary_max}</p>
      </div>
    </div>
  );
}

export default JobDetail;

