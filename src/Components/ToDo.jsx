import {React} from 'react'
import { Container, Card, CardContent, Typography, IconButton } from "@mui/material";
import { DoneRounded,  DeleteRounded } from '@mui/icons-material'

const ToDo = ({task , checkTodo, id , delTodo, isComp}) => {

  const handleMarkComp = () => {
    checkTodo(id)
  }
  const handleDelToDo = () => {
    delTodo(id)
  }

  const tickDeco =  isComp? {textDecoration: "line-through"} : {textDecoration: "none"};

  return (
    <div>
      <Container>
        <Card variant='outlined' style ={{marginTop: 35, background: "lightgrey", height: "10%"}}>
          <CardContent>
            <Typography variant='h7' component='h2' style = {tickDeco}>
            <IconButton onClick={handleMarkComp} >
              <DoneRounded style = {{color: "green"}} />
            </IconButton>
            {task}
            <IconButton onClick = {handleDelToDo} style = {{float: "right"}} >
              <DeleteRounded style = {{color: "rgb(108,54,54)"}} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
      
    </div>
  )
}

export default ToDo
