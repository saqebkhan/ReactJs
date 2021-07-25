import { CourseInfo } from "./CourseInfo";
import { CourseReducer } from "../Reducer/CourseReducer";

export const Cources = () => {
  console.log(CourseReducer);
  return (
    <div className="App">
      <table>
        <tr>
          {CourseReducer.Data.map((item) => (
            <td>
              <CourseInfo
                courseName={item.courseName}
                instituteName={item.instituteName}
                city={item.city}
                mobileNumber={item.mobileNumber}
              />
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
};
