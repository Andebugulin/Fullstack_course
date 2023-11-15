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
        {props.part_name} {props.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  // content parts : list[] of {'part<number>' : str(), 'exercises<number>' : int()} elements
  const content_parts = props.content_parts;

  const content_of_part1 = content_parts[0];
  const content_of_part2 = content_parts[1];
  const content_of_part3 = content_parts[2];

  return (
    <div>
      <Part
        part_name={content_of_part1.part_name}
        exercise={content_of_part1.exercise}
      />
      <Part
        part_name={content_of_part2.part_name}
        exercise={content_of_part2.exercise}
      />
      <Part
        part_name={content_of_part3.part_name}
        exercise={content_of_part3.exercise}
      />
    </div>
  );
};

const Total = (props) => {
  // content parts : list[] of {'part<number>' : str(), 'exercises<number>' : int()} elements
  const content_parts = props.content_parts;

  const content_of_part1 = content_parts[0];
  const content_of_part2 = content_parts[1];
  const content_of_part3 = content_parts[2];

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
  const content_parts = [
    {
      part_name: "Fundamentals of React",
      exercise: 10,
    },
    {
      part_name: "Using props to pass data",
      exercise: 7,
    },
    {
      part_name: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content_parts={content_parts} />
      <Total content_parts={content_parts} />
    </div>
  );
};

export default App;
