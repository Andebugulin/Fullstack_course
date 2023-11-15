const Header = (props) => {
  // kind of a header on a page.
  const course = props.course;

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  const content_of_part1 = props.parts[0];
  const content_of_part2 = props.parts[1];
  const content_of_part3 = props.parts[2];

  return (
    <div>
      <Part
        name={content_of_part1.name}
        exercises={content_of_part1.exercises}
      />
      <Part
        name={content_of_part2.name}
        exercises={content_of_part2.exercises}
      />
      <Part
        name={content_of_part3.name}
        exercises={content_of_part3.exercises}
      />
    </div>
  );
};

const Total = (props) => {
  const content_of_part1 = props.parts[0];
  const content_of_part2 = props.parts[1];
  const content_of_part3 = props.parts[2];

  const exercises1 = content_of_part1.exercises;
  const exercises2 = content_of_part2.exercises;
  const exercises3 = content_of_part3.exercises;

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
