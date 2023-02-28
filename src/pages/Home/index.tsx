import {
  HomeContainer,
  HomeForm,
  StartButton,
  StopButton,
} from "./styles";
import { HandPalm, Play } from "phosphor-react";
import { useForm, FormProvider } from "react-hook-form";
import { TaskForm } from "../../@types/task-form";
import taskFormSchema from "../../validations/task-form-schema";
import { useContext } from "react";
import { TaskFormComponent } from "./TaskForm";
import { Count } from "./Count";
import { CyclesContext } from "../../context/cycleContext/cycleContext";

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const newTaskForm = useForm<TaskForm>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: taskFormSchema,
    defaultValues: {
      minutesAmount: 0,
      task: "",
    },
  });

  const {
    handleSubmit,
    reset,
  } = newTaskForm

  function handleCreateNewCycle(data: TaskForm) {    
    createNewCycle(data)
    reset()
  }


  return (
    <HomeContainer>
      <HomeForm onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <FormProvider {...newTaskForm}>
            <TaskFormComponent />
          </FormProvider>
          <Count /> 
        {activeCycle ? (
          <StopButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopButton>
        ) : (
          <StartButton type="submit">
            <Play size={24} />
            Começar
          </StartButton>
        )}
      </HomeForm>
    </HomeContainer>
  );
}
