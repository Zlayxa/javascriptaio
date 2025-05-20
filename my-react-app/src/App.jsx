import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import React from "react";
//import Message from "./Message";
//import { Blink, SolidBorderBox } from "./StyleElements";
//import useGitHubRepos from "./components/Chapter03/useGitHubRepos";

/*function Flashlight() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <Lightbulb glowing={isOn} />
      <button onClick={() => setIsOn(!isOn)}>Change State.</button>
      <button onClick={() => setIsOn(false)}>Turn Off.</button>
    </div>
  );
}

export default Flashlight;

function Lightbulb(props) {
  return (
    <div>
      <div
        className="bulb"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: props.glowing ? "magenta" : "black",
        }}
      />
    </div>
  );
}*/

/* //A Function Component Counter with State elements.
function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  function incrementCount() {
    const newCount = currentCount + 1;
    setCurrentCount(newCount);
  }
  return <button onClick={incrementCount}>{currentCount}</button>;
}

export default Counter;*/

/*//A Class Component Counter with State elements.
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    const newCount = this.state.currentCount + 1;
    this.setState({ currentCount: newCount });
  }
  render() {
    return (
      <button onClick={this.incrementCount}>{this.state.currentCount}</button>
    );
  }
}

export default Counter;*/

/*export default function Bing() {
  return (
    <homepage>
      <TopNav />
      <SEARCHBOK />
      <NewsImageScroller />
      <div>
        <div class="leftColumn">
          <TopStories />
        </div>
        <div class="rightColumn">
          <Weather postalCode="97103" />
          <Sports />
        </div>
      </div>
    </homepage>
  );
}*/

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        coords: { lat: 0, long: 0 },
      },
      temperature: 0,
      windSpeed: 0,
      precipitation: 0,
    };
  }
  render() {
    return <div>Widget Goes Here</div>;
  }
}

export default App;*/

/*function ParentComponent() {
  return (
    <div>
      <ChildComponent firstName="Alex" />
      <ChildComponent firstName="Mallory" />
      <ChildComponent firstName="Jennifer" />
    </div>
  );
}

function ChildComponent(props) {
  return <div>Hi, my name is {props.firstName}.</div>;
}*/

/*function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Learning React!hot</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more or just don't and go
        fuck yourself!
      </p>
    </>
  );
}

export default App;*/

/*//Rendering with State Data
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Chicago",
      current_condition: {
        temp_C: 0,
        windspeedKmph: 0,
        precipMM: 0,
      },
    };
  }
  render() {
    return (
      <div>
        <h1>Today's Weather for {this.state.location}</h1>
        <ul>
          <li>Temperature: {this.state.current_condition.temp_C}C</li>
          <li>Wind Speed: {this.state.current_condition.windspeedKmph}km/h</li>
          <li>
            Precipitation Amount: {this.state.current_condition.precipMM}mm
          </li>
        </ul>
      </div>
    );
  }
}*/

/*class Message extends React.PureComponent {
  render() {
    return <h1>Hi, {this.props.firstName}</h1>
  }
}

//Above stops components re-rendering everytime something with the same props has the same output.
//Below is a better way to do it as it remembers (caches) the output, and puts it out if the inputs are the same as the first render.?

const Message = React.memo(function Message(props) {
  return <h1>Hi, {props.firstName}</h1>
})*/

/*//Fetching Data inside componentDidMount()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Harrow, United Kingdom",
      current_condition: {
        temp_C: 0,
        windspeedKmph: 0,
        precipMM: 0,
      },
    };
  }
  componentDidMount() {
    const getWeatherData = async (city) => {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      const weatherData = await response.json();
      this.setState({ current_condition: weatherData.current_condition[0] });
    };
    getWeatherData(this.state.location);
  }
  render() {
    return (
      <div>
        <h1>Today's Weather for {this.state.location}.</h1>
        <ul>
          <li>Temperature: {this.state.current_condition.temp_C}</li>
          <li>Wind: {this.state.current_condition.windspeedKmph}km/h</li>
          <li>
            Precipitation Amount: {this.state.current_condition.precipMM}mm
          </li>
        </ul>
      </div>
    );
  }
}

export default App;*/

/*class ShowClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.getNewTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getNewTime() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return <h1>The current time is {this.state.date.toLocaleTimeString()}</h1>;
  }
}

export default ShowClock;
//A clock that updates every second and doesn't cause a emmory leak as the interval timer is able to be unmounted if not in use.*/

/*function RecordClicks(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("currentCount", count);
  });
  function incrementCount() {
    const incremented = count + 1;
    setCount(incremented);
  }
  return <button onClick={incrementCount}>Increment and Store: {count}</button>;
}

export default RecordClicks;*/

/*function RecordClicks(props) {
  const [count, setCount] = useState(getSavedState());

  function getSavedState() {
    const savedString = localStorage.getItem("currentCount");
    const initialCount = JSON.parse(savedString);
    console.log(`currentCount: ${initialCount}`);
    return initialCount || 0;
  }

  useEffect(() => {
    localStorage.setItem("currentCount", JSON.stringify(count));
  }, [count]);

  function incrementCount() {
    const incremented = count + 1;
    setCount(incremented);
  }
  return <button onClick={incrementCount}>Increment and Store: {count}</button>;
}

export default RecordClicks;*/

/*function ClockContainer(props) {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle Clock Visibility.
      </button>
      {visible && <Clock />}
    </div>
  );
}
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => getNewTime(), 1000);
    return () => {
      console.log("Stopping the timer...");
      clearInterval(timer);
    };
  }, []);
  function getNewTime() {
    setDate(new Date());
    console.log("tick...");
  }

  return (
    <div>
      <h1>The current date and time are {date.toLocaleString()}</h1>
    </div>
  );
}

export default ClockContainer;*/

/*class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
}

const myCircle = new Circle("blue", 3);*/

/*function Message(props) {
  return (
    <div className={props.messageType}>
      <h1>{props.messageText}</h1>
    </div>
  );
}
export default Message;*/

/*function ErrorMessage(props) {
  return <Message messageType="error" messageText={props.errorMessage}/>;
}
export default ErrorMessage;*/

/*export function SolidBorderBox(props) {
  return (
    <div style={{ border: "1px solid black", padding: "8px" }}>
      {props.children}
    </div>
  );
}

export function Blink(props) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const blinker = setInterval(() => setVisible(!visible), props.delay);
    return () => clearInterval(blinker);
  });
  return <div>{visible && props.children}</div>;
}*/

/*function App() {
  return (
    <solidBorderBox>
      <Blink delay={1000}>
        <p>Important Message!</p>
      </Blink>
    </solidBorderBox>
  );
}
export default App;*/

/*export default function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState("idle");

  useEffect(() => {
    const getRepos = async () => {
      try {
        setIsLoading(true);
        let response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        let data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRepos();
    setIsLoading(false);
  }, [username]);

  return [repos, isLoading];
}*/

/*function App() {
  const [repos, isLoading] = useGitHubRepos("facebook");
  const reposList = repos.map((repo, index) => (
    <li key={index}>
      <a href={repo.clone_url}>{repo.name}</a>
    </li>
  ));
  return <div>{isLoading ? "Loading..." : reposList}</div>;
}

export default App;*/

/*//Viewing the properties of the SyntheticBaseEvent Object.
function EventProps() {
  const logClick = (e) => {
    console.dir(e);
  };
  return <button onClick={logClick}>Click Me.</button>;
}
export default EventProps;*/

/*//Defining a Named Event Handler Function.
function Counter(props) {
  const [counter, setCounter] = useState(0);
  function increment(incrementBy = 1) {
    setCounter(counter + incrementBy);
  }
  return <button onClick={increment}>{counter}</button>;
}
export default Counter;
//For some reason keeps the counter at 0, but adds "[Object, object]" with every click.
function Counter(props) {
  const [counter, setCounter] = useState(0);
  function increment(incrementBy = 1) {
    setCounter(counter + incrementBy);
  }
  return <button onClick={() => increment(2)}>Add 2</button>;
}
export default Counter;
//This version stops the "[Object, object]" problem, but for some reason will not register a click and add an increment.*/

/*//Binding Class Methods Before Passing them as Attributes.
//This is designed to be wrapped around something I want to turn visible or hide.
class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  setVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div>
        {this.state.visible ? this.props.children : ""}
        <button onClick={this.setVisibility.bind(this)}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleVisibility;*/

/*//Binding a Method in the Constructor.
//This version is better as it binds the element I want to hide, thus allows for the function to be accessed as long as the class exists.
//This also allows the function to run with every re-render and the constructor to be run once.
class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.setVisibility = this.setVisibility.bind(this);
  }
  setVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div>
        {this.state.visible ? this.props.children : ""}
        <button onClick={this.setVisiblity}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleVisibility;*/

/*//Defining Event Handler Functions using Arrow Function Syntax.
class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 0 };
  }
  changeVolume = (e) => {
    this.setState({ volume: e.target.value });
  };
  render() {
    return (
      <>
        <p>Turn the volume up! Current Volume: {this.state.volume}</p>
        <input
          type="range"
          value={this.state.volume}
          min="0"
          max="11"
          onChange={this.changeVolume}
        />
      </>
    );
  }
}

export default VolumeSlider;*/

/*//VolumeSlider written using a Function Component.
//This uses a Function Component over the previos version that uses Class Component.
//Doing it this way means it isn't necessary to bind anything.
function VolumeSlider(props) {
  const [volume, setVolume] = useState(0);

  function changeVolume(e) {
    setVolume(e.target.value);
  }

  return (
    <>
      <p>Turn the volume up! Current Volume: {volume}</p>
      <input
        type="range"
        value={volume}
        min="0"
        max="11"
        onChange={changeVolume}
      />
    </>
  );
}

export default VolumeSlider;*/

/*//Using Controlled Inputs.
function CustomerServiceSurvey(props) {
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  return (
    <div>
      <div>
        You've entered the following: <br />
        Rating: {rating}
        <br />
        Comments: {comments}
        <br />
        Name: {yourName}
        <br />
        Email: {yourEmail}
        <br />
      </div>
      <h1> How was your experience with our website today?</h1>
      <select
        name="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option>Excellent</option>
        <option>Pretty Good</option>
        <option>Fair</option>
        <option>Bad</option>
        <option>Horrible</option>
      </select>
      <h1>Would you like to leave any comments?</h1>
      <textarea
        name="comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <h1>
        Please provide your contact information if you'd like to be contacted
      </h1>
      Your name:
      <input
        name="yourName"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />
      <br />
      Your Email:
      <input
        name="yourEmail"
        value={yourEmail}
        onChange={(e) => setYourEmail(e.target.value)}
      />
    </div>
  );
}
export default CustomerServiceSurvey;*/

/*//Creating Uncontrolled Inputs
function CustomerServiceSurvey(props) {
  return (
    <div>
      <h1>How was your experience with our website today?</h1>
      <select name="rating">
        <option>Excellent</option>
        <option>Pretty Good</option>
        <option>Fair</option>
        <option>Bad</option>
        <option>Horrible</option>
      </select>
      <h1>Would you like to leave any comments?</h1>
      <textarea name="comments" />
      <h1>
        Please provide your contact information if you would like to be
        contacted.
      </h1>
      Your name:
      <input name="yourName" />
      <br />
      Your email:
      <input email="yourEmail" />
    </div>
  );
}
export default CustomerServiceSurvey;*/

/*//Getting the Values of Uncontrolled Inputs from the Window Object.
//Don't use this option as it bypasses certain aspects and can create unexpected problems with the way React reacts.
function CustomerServiceSurvey(props) {
  function onSubmit(e) {
    e.preventDefault();
    alert(
      `You rated us ${window.rating.value} and you had the following comments: ${window.comments.value}`
    );
  }
  return (
    <div>
      <h1>How was your experience with our website today?</h1>
      <form onSubmit={onSubmit}>
        <select name="rating" id="rating">
          <option>Excellent</option>
          <option>Pretty Good</option>
          <option>Fair</option>
          <option>Bad</option>
          <option>Horrible</option>
        </select>
        <h1>Would you like to leave any comments?</h1>
        <textarea name="comments" id="comments" />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
export default CustomerServiceSurvey;*/
