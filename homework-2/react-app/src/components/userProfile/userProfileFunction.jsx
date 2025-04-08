import "./userProfile.css"

export function UserProfileFunction({ name, age, hobby }) {
  return (
    <div className="card">
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}
