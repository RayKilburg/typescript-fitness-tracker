import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import FitnessTask from './Components/FitnessTask';
import {IFit} from './interfaces'

const App: FC = () => {

  // task - machicine | deadline - time | todo - fitness
  const [machine, setMachine] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [distance, setDistance] = useState<string>("")
  const [fitnessList, setFitness] = useState<IFit[]>([])

  // getting data from inputs
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "machine") {
      setMachine(event.target.value)
    } else if(event.target.name === "time") {
      setTime(event.target.value)
    } else {
      setDistance(event.target.value)
    }
  }

  // add workouts to list
  const addWorkout = (): void => {
    const newFit = {machineName: machine, time: time, distance: distance }
    setFitness([...fitnessList, newFit])
    setMachine("")
    setTime("")
    setDistance("")
    console.log(fitnessList);
  }

  // remove workout from list
  const removeWorkout = (workoutToDelete: string): void => {
    setFitness(fitnessList.filter((machine) => {
      return machine.machineName != workoutToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Machine/Exercise..." name="machine" value={machine} onChange={handleChange} />
          <input type="text" placeholder="Time..." name="time" value={time} onChange={handleChange} />
          <input type="text" placeholder="Distance/Reps..." name="distance" value={distance} onChange={handleChange} />
        </div>
        <button onClick={addWorkout}>Add Workout 💪</button>
      </div>
      <div className="fitnessList">
        {fitnessList.map((machine: IFit, key: number) => {
          return <FitnessTask key={key} machine={machine} removeWorkout={removeWorkout}/>;
        })}
      </div>
    </div>
  );
}

export default App;
