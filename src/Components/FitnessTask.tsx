import React from 'react'
import { IFit } from "../interfaces"

interface Props {
    machine: IFit;
    removeWorkout(workoutToDelete: string): void;
}

const FitnessTask = ({ machine, removeWorkout }: Props) => {
    return (
        <div className="task">
                <div className="content">
                    <span>{machine.machineName}</span>
                    <span>{machine.time}</span>
                    <span>{machine.distance}</span>
                </div>
                <button onClick={() => {
                    removeWorkout(machine.machineName)
                }}>X</button>
        </div>
    )
}

export default FitnessTask
