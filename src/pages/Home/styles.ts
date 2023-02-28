import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SpanErrors = styled.span`
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.8rem;
    font-weight: bold;
    position: absolute;
    bottom: -1.4rem;
    width: 100%;
    right: 0;
`

export const HomeForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    min-width: 60%;
`

export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    color: ${(props) => props.theme["gray-100"]};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`
export const StartButton = styled(BaseButton)`
    background: ${(props) => props.theme["green-500"]};

    &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
    }
`
export const StopButton = styled(BaseButton)`
    background: ${(props) => props.theme["red-500"]};

    &:not(:disabled):hover {
        background: ${(props) => props.theme["red-700"]};
    }
`