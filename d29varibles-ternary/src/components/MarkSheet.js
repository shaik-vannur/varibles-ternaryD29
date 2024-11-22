import React from "react";

function MarkSheet(props) {
  let telMarks = Number(props.telMarks);
  let hinMarks = Number(props.hinMarks);
  let engMarks = Number(props.engMarks);
  let matMarks = Number(props.matMarks);
  let sciMarks = Number(props.sciMarks);
  let socMarks = Number(props.socMarks);

  let maxMarks =
    telMarks + hinMarks + engMarks + matMarks + sciMarks + socMarks;
    let overallResult=""
    let overallRemarks=""
    if(telMarks>=35&&hinMarks>=35&&engMarks>=35&&matMarks>=35&&sciMarks>=35&&socMarks>=35){
        overallResult="pass"
        overallRemarks="good"
    }
    else
    {
        overallResult="fail"
        overallRemarks="bad performance"
    }

  return (
    <div>
      <table>
        <caption>{props.studentName} Marks Sheet</caption>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Maximum Marks</th>
            <th>Marks Gained</th>
            <th>Result</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Telugu</td>
            <td>100</td>
            <td>{telMarks}</td>
            <td>{telMarks >= 35 ? "pass" : "fail"}</td>
            <td>{telMarks >= 35 ? "Good" : "bad performance"}</td>
          </tr>
          <tr>
            <td>Hindi</td>
            <td>100</td>
            <td>{hinMarks}</td>
            <td>{hinMarks >= 35 ? "pass" : "fail"}</td>
            <td>{hinMarks >= 35 ? "Good" : "bad performance"}</td>
          </tr>
          <tr>
            <td>English</td>
            <td>100</td>
            <td>{engMarks}</td>
            <td>{engMarks >= 35 ? "pass" : "fail"}</td>
            <td>{engMarks >= 35 ? "Good" : "bad performance"}</td>
          </tr>
          <tr>
            <td>maths</td>
            <td>100</td>
            <td>{matMarks}</td>
            <td>{matMarks >= 35 ? "pass" : "fail"}</td>
            <td>{matMarks >= 35 ? "Good" : "bad performance"}</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>100</td>
            <td>{sciMarks}</td>
            <td>{sciMarks >= 35 ? "pass" : "fail"}</td>
            <td>{sciMarks >= 35 ? "Good" : "bad performance"}</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>100</td>
            <td>{socMarks}</td>
            <td>{socMarks >= 35 ? "pass" : "fail"}</td>
            <td>{socMarks >= 35 ? "Good" : "bad performance"}</td>
          </tr>
        </tbody>
        <tfoot>
          <th>Total</th>
          <th>600</th>
          <th>{maxMarks}</th>
          <th>{overallResult}</th>
          <th>{overallRemarks}</th>
        </tfoot>
      </table>
    </div>
  );
}

export default MarkSheet;
