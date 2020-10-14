import React from "react";
import axios from "axios";

const Home = () => {
    const [courses, setcourses] = React.useState([]);

    const handleShowCoursesOnClick = () => {
        axios.get("courses/").then(x => {
            let { data } = x;
            setcourses(data);
        });
    };
    const handleClearOnClick = () => {
        setcourses([]);
    };

    return (
        <>
            <h1>Home!</h1>
            <button onClick={handleShowCoursesOnClick}>Show Courses</button>
            <button onClick={handleClearOnClick}>Clear</button>
            <ul>
                {courses.map(x => {
                    return <li key={x}>{x}</li>;
                })}
            </ul>
        </>
    );
};

export default Home;
