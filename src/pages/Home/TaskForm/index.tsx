import { useContext } from "react";
import { CyclesContext } from "../../../context/cycleContext/cycleContext";
import { SpanErrors } from "../styles";
import { ContainerInput, FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";

export function TaskFormComponent() {
    const { activeCycle } = useContext(CyclesContext);
    const { register, formState: {errors} } = useFormContext()
    return (
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <ContainerInput>
            <TaskInput
              id="task"
              list="task-suggestion"
              placeholder="Dê um nome para o seu projeto"
              {...register("task")}
              disabled={!!activeCycle}
            />
            <SpanErrors>{errors.root?.message}</SpanErrors>
          </ContainerInput>
          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
            disabled={!!activeCycle}
          />
          <span>minutos.</span>
        </FormContainer>
    )
}