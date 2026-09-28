import { useState } from "react";
import CourseBox from "./CourseBox";
import CourseList from "./CourseList";

export default function Main() {
  const [courses, setCourses] = useState([
    {
      title: "php course",
      description: "this is php course description",
    },
    {
      title: "javascript course",
      description: "this is javascript course description",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useState(false);

  const btnlogin = () => {
    setAuth(true);
    return loadMoreCourseHandler;
  };
//todo بعدل میام
  const loadMoreCourseHandler = () => {
    setLoading(true);

    setTimeout(() => {
      setCourses((prevCourses) => [
        ...prevCourses,
        {
          title: "laravel course",
          description: "this is laravel course description",
        },
      ]);
      setLoading(false);
    }, 3000);
  };

  if (!auth) {
    return (
      <div className="p-4">
        <span className="text-3xl font-normal">You Not Login</span>
        <br></br>
        <button
          className="middle none center rounded-lg dark:bg-red-500 bg-amber-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={btnlogin}
        >
          Login Now
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h1>Main Body Section {name}</h1>
      <CourseList>
        {courses.map((course, index) => (
          <CourseBox key={index} course={course} />
        ))}

        {loading ? (
          <span> loading... </span>
        ) : (
          <button
            className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={loadMoreCourseHandler}
          >
            {" "}
            Load More{" "}
          </button>
        )}
      </CourseList>
    </div>
  );
}
