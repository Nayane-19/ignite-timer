export interface TaskForm {
    task: string;
    minutesAmount: number;
}

export interface CycleData {
    id: string;
    task: string;
    minutesAmount: number;
    startCycle: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

export interface CycleContextType {
    cycles: CycleData[];
    activeCycle?: CycleData;
    activeCycleId?: string | null;
    amountSecondPassed: number;
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}