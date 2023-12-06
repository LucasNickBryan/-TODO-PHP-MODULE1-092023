<?php
class Task {
    private $tasks = [];

    public function __construct() {
        $this->tasks = $this->getTasks();
    }

    public function getTasks() {
        $tasksContent = file_get_contents('tasks.json');
        return json_decode($tasksContent, true) ?: [];
    }

    public function saveTasks() {
        file_put_contents('tasks.json', json_encode($this->tasks));
    }

    public function addTask($taskName) {
        $newTask = array('task' => $taskName, 'completed' => false);
        $this->tasks[] = $newTask;
        $this->saveTasks();
    }

    public function getAllTasks() {
        return $this->tasks;
    }
}
?>
