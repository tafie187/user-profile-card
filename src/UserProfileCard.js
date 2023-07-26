import taffie from "./taf.jpg";
import './App'
function UserProfileCard() {
  return (
    <div className="App">
    <div className="user-profile-card">
      <img src={taffie} alt="Taffie Pic" />
      <h2>Tafadzwa Chijarira</h2>
      <p className="para">Full Stack Developer</p><br/>
      <p>
        A talented and passionate young developer with a strong ambition to make
        a mark in the world of technology.
      </p>
      <div className="num">
        <ul className="stats">
          <li>
            2000 <br />
            Followers
          </li>
          <li>
            300 <br />
            Following
          </li>
          <li>
            15 <br />
            Projects
          </li>
          <li></li>
        </ul>
      </div>
      <div className="btn">
        <button>Contact Me</button>
        <button>View Profile</button>
      </div>
    </div>
    </div>
  );
}
export default UserProfileCard;
