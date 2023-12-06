// Fonction pour ajouter une tâche
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
  
    if (task !== '') {
      // Envoi de la tâche au serveur
      fetch('../php/tasks.php', {
        method: 'POST',
        body: new URLSearchParams({ task: task }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => response.json())
      .then(data => {
        // Mettre à jour l'affichage de la liste des tâches
        displayTasks(data);
        taskInput.value = '';
      })
      .catch(error => console.error('Erreur:', error));
    }
  }
  
  // Fonction pour afficher les tâches
  function displayTasks(tasks) {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach(task => {
      let listItem = document.createElement('li');
      listItem.textContent = task.task;
      taskList.appendChild(listItem);
    });
  }
  
  // Charger les tâches initiales lors du chargement de la page
  window.onload = function() {
    fetch('../php/tasks.php')
      .then(response => response.json())
      .then(data => displayTasks(data))
      .catch(error => console.error('Erreur:', error));
  };
  