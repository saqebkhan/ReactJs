export const CourseInfo=({courseName , instituteName ,city , mobileNumber})=>{

    return (
    
        
     <table border="2px">
    <tr>
<td>Course</td>
<td>:</td>
<td><span>{courseName}</span></td>
</tr>

<tr>
<td>Institute</td>
<td>:</td>
<td><span class="a">{instituteName}</span></td>
</tr>

<tr>
<td>City</td>
<td>:</td>
<td>{city}</td>
</tr>

<tr>
<td>Mobile Number</td>
<td>:</td>
<td>{mobileNumber}</td>
</tr>
</table>

    )
       
}

