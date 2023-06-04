import Card from "./Card";

function Tours({tours, removeTour}) {
  return (
    <div>
      <div>
        <h2>Plan with Apurv</h2>
      </div>
      <div>
        {tours.map((tour) => (
          <Card {...tour} removeTour={removeTour}/>
        ))}
      </div>
    </div>
  );
}

export default Tours;
