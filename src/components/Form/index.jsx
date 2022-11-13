// - nome da postagem
// - corpo da postagem
// - data e hora da publicação da postagem


import {TextField}  from "@mui/material"
import { Container } from "./styles"

export function Form(){
    return(
        <Container>
            <label>
                Nome da postagem
            </label>
            <TextField 
                id="outlined-basic" 
                label="Digite o nome da postagem" 
                variant="outlined" 
                margin='normal'
            />
            <label>
                Corpo da postagem
            </label>
            <TextField
                id="outlined-multiline-static"
                label="Digite o corpo da postagem"
                multiline
                rows={4}
            />
           
        </Container>
    )
}