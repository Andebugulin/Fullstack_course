const Header = (props) => {
  // kind of a header on a page.
  const course = props.course;

  return (
    <div>
      <h1>{course}</h1>
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
      <p>
        {content_of_part1.part1} {content_of_part1.exercises1}
      </p>
      <p>
        {content_of_part2.part2} {content_of_part2.exercises2}
      </p>
      <p>
        {content_of_part3.part3} {content_of_part3.exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  // content parts : list[] of {'part<number>' : str(), 'exercises<number>' : int()} elements
  const content_parts = props.content_parts;

  const content_of_part1 = content_parts[0];
  const content_of_part2 = content_parts[1];
  const content_of_part3 = content_parts[2];

  const exercises1 = content_of_part1.exercises1;
  const exercises2 = content_of_part2.exercises2;
  const exercises3 = content_of_part3.exercises3;

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
      part1: "Fundamentals of React",
      exercises1: 10,
    },
    {
      part2: "Using props to pass data",
      exercises2: 7,
    },
    {
      part3: "State of a component",
      exercises3: 14,
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
