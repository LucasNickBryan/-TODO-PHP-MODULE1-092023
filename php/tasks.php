<?php
require_once 'Task.php';

$taskObj = new Task();

// Traitement de la requête POST pour ajouter une nouvelle tâche
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['task'])) {
    $newTask = $_POST['task'];
    $taskObj->addTask($newTask);
}

// Récupérer toutes les tâches
$tasks = $taskObj->getAllTasks();

// Afficher la liste des tâches au format JSON
echo json_encode($tasks);
?>
