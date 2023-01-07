export const Presentational = () => {
  return (
    <ul>
      {[1, 2, 3].map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
