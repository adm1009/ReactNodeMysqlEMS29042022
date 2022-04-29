// import React from 'react';

// import { Calendar } from 'react-big-calendar';

// import moment from 'moment';

// class Calendar extends React.Component {

//    render() {

//        return (

//            <Calendar

//                startAccessor="start"

//                endAccessor="end"

//            />

//        )

//    }
// }
// export default Calendar;
// import React, { Component } from "react";
// import Calendar from "react-calendar";
// import Navbar from "../Navbar";
// import { Navigate} from "react-router-dom";
// import "../Home.css";
// type props = {
//   date:any
//   username:any
// }

// class MonthlyAttendance extends React.Component<props,props> {
//   constructor(props: props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//       username:this.props.username
//     };
//   }

//   onChange = (date: any) => this.setState({ date });

//   render() {

//     return (
//       <>
//         <Navbar personalData leaveData employeeData myaccount username={this.props.username}/>
//         <div style={{textAlign:"center"}}>
//         <span style={{ textDecoration: "underline" }}>Monthly Attendance</span>
//         <hr />
//         <Calendar onChange={this.onChange} value={this.state.date} />
//       </div>
//       </>
//     );
//   }
// }
// export default MonthlyAttendance;
// import React from 'react';
// import Navbar from '../Navbar';
// class MonthlyAttendance extends React.Component<any,any> {
//   render(){
//   return (<>
//     <Navbar  personalData
//     leaveData
//     myaccount
//     employeeData
//     username={this.props.username}/>
//     <div style={{textAlign:"center"}}>MonthlyAttendance</div>
//     <hr />
//     </>
//   )
// }
// }
// export default MonthlyAttendance;
// import React from 'react';
// import Navbar from '../Navbar';
// const MonthlyAttendance = () => {
//   return (<>
//     <Navbar  personalData
//     leaveData
//     myaccount
//     employeeData
//     username={this.props.username}/>
//     <div style={{textAlign:"center"}}>MonthlyAttendance</div>
//     <hr />
//     </>
//   )
// }

// export default MonthlyAttendance

// import { render } from "@testing-library/react";
// import React, { useState } from "react";
// import Calendar from "react-calendar";
// // import "react-calendar/dist/Calendar.css";
// import ReactDOM from "react-dom";
// import Navbar from "../Navbar";
// import Axios from "axios";
// // import "./styles.css";

// class MonthlyAttendance extends React.Component<any, any> {
//   // Array to store month string values
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       selectedDate: "",
//       calendarText: "",
//       username: this.props.username,
//       intime: "-",
//       outtime: "-",
//       hours: "-",
//       status: "-",
//       attendancelist: [],
//     };
//   }
//   allMonthValues = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   handleDateChange = (value: any) => {
//     Axios.get("http://localhost:3001/employeedetailsgetdailyattendance").then(
//       (response) => {
//         const attendancelist = response.data;
//         this.setState({ attendancelist });
//       }
//     );
//     this.setState({ selectedDate: value });
//     this.setState({ calendarText: value });
//   };
//   render() {
//     return (
//       <div className="app">
//         <Navbar
//           personalData
//           leaveData
//           myaccount
//           employeeData
//           username={this.props.username}
//         />
//         {this.state.attendancelist.map((item: any) => {
//           if (this.state.calendarText === item.date)
//             return (
//               <>
//                 <h5 className="calander-details">{this.state.intime}</h5>
//                 <h5 className="calander-details">{this.state.outtime}</h5>
//                 <h5 className="calander-details">{this.state.hours}</h5>
//                 <h5 className="calander-details">{this.state.status}</h5>
//               </>
//             );
//         })}
//         <Calendar
//           onClickMonth={(value:any,event:any)=>alert(`month:${value}`)}
//           value={this.state.selectedDate}
//         />
//       </div>
//     );
//   }
// }
// export default MonthlyAttendance;
import React, { Component } from "react";
import Navbar from "../Navbar";
import "./MonthlyAttendance.css";
import Axios from "axios";
type props = {
  username: any;
  show: boolean;
  attendancelistinmon: any;
  month:number
};
class MonthlyAttendance extends React.Component<
  props,
  { username: any; show: boolean; attendancelistinmon: any;month:number }
> {
  constructor(props: props) {
    super(props);
    this.state = {
      username: this.props.username,
      month:4,
      show: false,
      attendancelistinmon: [],
    };
  }
  getattendanceHandler = (e: any) => {
    Axios.get("http://localhost:3001/employeedetailsgetdailyattendance").then(
      (response) => {
        const attendancelistinmon = response.data;
        this.setState({ attendancelistinmon, show: true });
      }
    );
  };
  render() {
    return (
      <>
        <Navbar
          personalData
          leaveData
          myaccount
          employeeData
          username={this.props.username}
        />
        <div style={{ textAlign: "center" }}>
          <button
            className="getAttendanceButton"
            onClick={this.getattendanceHandler}
          >
            Get Attendance
          </button>
        </div>
        <div style={{height:"350px"}}>
        {this.state.show && (
          <>
            <tr>
              <td>Sunday</td>
              <td>Monday</td>
              <td>Tuesday</td>
              <td>Wednesday</td>
              <td>Thursday</td>
              <td>Friday</td>
              <td>Saturday</td>
            </tr>
            <tr>
            <td> 
                <p className="dateback">0</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 0 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">0</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 0 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">0</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 0 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">0</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 0 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">0</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 0 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">1</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 1 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td> 
                <p className="dateback">2</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 2 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
            </tr>
            <tr>
            <td> 
                <p className="dateback">3</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 3 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">4</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 4 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">5</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 5 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">6</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 6 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">7</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 7 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">8</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 8 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td> 
                <p className="dateback">9</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 9 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
            </tr>
            <tr>
            <td> 
                <p className="dateback">10</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 10 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">11</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 11 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">12</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 12 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">13</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 13 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">14</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 14 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">15</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 15 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td> 
                <p className="dateback">16</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 16 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
            </tr>
            <tr>
            <td> 
                <p className="dateback">17</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 17 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">18</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 18 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">19</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 19 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">20</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 20 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">21</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 21 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">22</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 22 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td> 
                <p className="dateback">23</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 23 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
            </tr>
            <tr>
            <td> 
                <p className="dateback">24</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 24 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">25</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 25 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">26</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 26 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">27</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 27 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">28</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 28 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td>
              <p className="dateback">29</p> 
                <br />
                <div style={{textAlign:"left"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status:{" "}
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 29 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
              <td> 
                <p className="dateback">30</p> 
                <br />
                <div style={{textAlign:"left",border:"4px solid limegreen",color:"limegreen"}}>
                <div style={{ display:"inline-block" }}>
                  <p style={{ marginTop: "-5px" }}>In: </p>
                  <p style={{ marginTop: "-15px" }}>Out: </p>
                  <p style={{ marginTop: "-15px" }}>
                    Hours:{" "}
                  </p>
                  <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>
                    Status: Weekend
                  </p>
                </div>
                <div style={{display:"inline-block"}}>
                {this.state.attendancelistinmon.map((item: any) => {
                  if (
                    this.state.username === item.username &&
                    item.indate === 30 &&
                    item.inmonth === this.state.month
                  )
                    return (
                      <div style={{border:item.outhour - item.inhour<5 ? "4px solid lightcoral":"none"}}>
                        <p style={{ marginTop: "-5px" }}>{item.inhour + "." + item.inmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour + "." + item.outmin}</p>
                        <p style={{ marginTop: "-15px" }}>{item.outhour - item.inhour}</p>
                        <p style={{ marginTop: "-15px", marginBottom: "-5px" }}>{(item.outhour - item.inhour >= 9 && "present") ||
                            (item.outhour - item.inhour > 5 && "halfday") ||
                            "absent"}</p>
                      </div>
                    );
                })}
                </div>
                </div>
              </td>
            </tr>
          </>
        )}
        </div>
      </>
    );
  }
}
export default MonthlyAttendance;
