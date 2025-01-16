import { useState, FunctionComponent } from 'react';
import { Box, Button, Input, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList: FunctionComponent = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="I need to..."
          fullWidth
          sx={{ marginRight: 1 }}
        />
        <Button onClick={handleAddTask} variant="contained">
          Add Task
        </Button>
      </Box>
      
      <Box sx={{ marginTop: 2 }}>
        {tasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 1,
              backgroundColor: 'grey.100',
              padding: 1,
              borderRadius: 1,
            }}
          >
            <Typography>{task}</Typography>
            <IconButton onClick={() => handleRemoveTask(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ToDoList;
