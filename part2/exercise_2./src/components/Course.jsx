const Header = ({ headerText }) => {
  console.log("displaying Header", headerText);
  return (
    <div>
      <h1>{headerText}</h1>
    </div>
  );
};

const Content = ({ courseInfo }) => {
  console.log("displaying content", courseInfo);
  return (
    <li>
      {courseInfo.name} {courseInfo.exercises}
    </li>
  );
};

const Course = ({ course }) => {
  const headerText = course.name;
  const courseData = course.parts;
  console.log("Courses are being rendered");
  return (
    <div>
      <Header headerText={headerText} />
      <ul>
        {courseData.map((courseInfo) => {
          return <Content key={courseInfo.id} courseInfo={courseInfo} />;
        })}
      </ul>
    </div>
  );
};

export default Course;
