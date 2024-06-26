import React, {useRef} from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`

const inputArea = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 120px;
    padding: 0px 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`

const Label = styled.label``

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`

const Form = ({onEdit}) =>{
    const ref = useRef();

    return(
        <FormContainer ref={ref}>
            <inputArea>
            <Label>Nome</Label>
            <Input name="nome"/>
            </inputArea>
            <inputArea>
            <Label>E-mail</Label>
            <Input name="email" type="email"/>
            </inputArea>
            <inputArea>
            <Label>Telefone</Label>
            <Input name="fone"/>
            </inputArea>
            <inputArea>
            <Label>Data de Nascimento</Label>
            <Input name="data_nascimento" type="date"/>
            </inputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
}

export default Form;