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
  const content_of_part1 = props.part1;
  const content_of_part2 = props.part2;
  const content_of_part3 = props.part3;

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
  const content_of_part1 = props.part1;
  const content_of_part2 = props.part2;
  const content_of_part3 = props.part3;

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
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

export default App;
