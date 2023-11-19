const Header = ({ headerText }) => {
  console.log("displaying Header", headerText);
  return (
    <div>
      <h1>{headerText}</h1>
    </div>
  );
};

const Part = ({ partInfo }) => {
  console.log("displaying part", partInfo);
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

const Course = ({ course }) => {
  const headerText = course.name;
  const courseData = course.parts;
  console.log("Header and Content are being rendered");
  return (
    <div>
      <Header headerText={headerText} />
      <Content courseData={courseData} />
    </div>
  );
};

export default Course;
