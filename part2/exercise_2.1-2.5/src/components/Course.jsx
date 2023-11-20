const Header = ({ headerText }) => {
  console.log("displaying Header", headerText);
  return (
    <div>
      <h1>{headerText}</h1>
    </div>
  );
};

const Part = ({ partInfo }) => {
  console.log("displaying part", partInfo, "\npartID", partInfo.id);
  return (
    <li>
      {partInfo.name} {partInfo.exercises}
    </li>
  );
};

const TotalExercises = ({ courseData }) => {
  console.log("calculating total exercises");
  const total = courseData.reduce((accumulation, currentPart) => {
    console.log(
      "while colculating total exercise",
      "\naccumulator equals to",
      accumulation,
      "\ncurrent part being accumulated is",
      currentPart
    );
    return (accumulation += currentPart.exercises);
  }, 0);
  return <div>total of {total} exercises</div>;
};

const Content = ({ courseData }) => {
  console.log("displaying content", courseData);
  return (
    <div>
      <ul>
        {courseData.map((partInfo) => {
          return <Part key={partInfo.id} partInfo={partInfo} />;
        })}
      </ul>
      <TotalExercises courseData={courseData} />
    </div>
  );
};

const Course = ({ headerText, courseData }) => {
  console.log("Header and Content are being rendered");
  return (
    <li>
      <Header headerText={headerText} />
      <Content courseData={courseData} />
    </li>
  );
};

const Courses = ({ courses }) => {
  return (
    <ul>
      {courses.map((currentCourseData) => {
        const headerText = currentCourseData.name;
        const courseData = currentCourseData.parts;
        const courseId = currentCourseData.id;
        console.log("Course is being rendered, \ncourseID is ", courseId);
        return (
          <Course
            key={courseId}
            headerText={headerText}
            courseData={courseData}
          />
        );
      })}
    </ul>
  );
};

export default Courses;
