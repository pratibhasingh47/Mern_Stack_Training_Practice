import React, { useState } from 'react';
import Greeting from './Greeting';
import ProfileCard from './ProfileCard';
import StatusMessage from './StatusMessage';
import Counter from './Counter';
import LikeButton from './LikeButton';
import Timer from './Timer';
import ColorPicker from './ColorPicker';
import TextInput from './TextInput';
import ToggleSwitch from './ToggleSwitch';
import TodoList from './TodoList';

function App() {
  const [color, setColor] = useState('#000000');
  const [text, setText] = useState('');
  const [toggled, setToggled] = useState(false);

  const todos = ['Learn React', 'Build a project', 'Master React'];

  return (
    <div>
      <Greeting name="John" />
      <ProfileCard name="Jane Doe" age={30} location="New York" />
      <StatusMessage status="success" />
      <Counter />
      <LikeButton likeCount={5} />
      <Timer start={60} />
      <ColorPicker onColorChange={setColor} />
      <TextInput onTextChange={setText} />
      <ToggleSwitch toggleState={() => setToggled(!toggled)} />
      <TodoList todos={todos} />

      <p>Selected Color: {color}</p>
      <p>Text Input: {text}</p>
      <p>Toggled: {toggled ? 'On' : 'Off'}</p>
    </div>
  );
}

export default App;
