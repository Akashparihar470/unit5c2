import { useEffect, useState } from "react";

export const ShowStudents = () => {
    const [students,setStudents] = useState([]);
    
     useEffect(() => {
         async function getdata(){
             const data = await fetch("http://localhost:8080/students").then((d)=>{
                 d.json().then((res)=>{
                    setStudents(res)
                 })
             });
            //  console.log(alldata)
         }
        getdata();
        // console.log(getdata())
     })
     
     
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {students.map(d=>
            <tr className="row">
              <td className="first_name">{d.first_name}</td>
              <td className="last_name">{d.last_name}</td>
              <td className="email">{d.email}</td>
              <td className="gender">{d.gender}</td>
              <td className="age">{d.age}</td>
              <td className="tenth_score">{d.tenth_score}</td>
              <td className="twelth_score">{d.twelth_score}</td>
              <td className="preferred_branch">{d.preferred_branch}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };