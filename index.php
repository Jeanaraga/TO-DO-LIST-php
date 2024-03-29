<?php 
require_once('database/conn.php');

$tasks = [];

try {
    $sql = $pdo->query("SELECT * FROM task");

    if ($sql->rowCount() > 0) {
        $tasks = $sql->fetchAll(PDO::FETCH_ASSOC);
    }



} catch (PDOException $e) {
    die("Erro na consulta: " . $e->getMessage());
}
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="./src/styles/style.css">
    <title>To do List</title>
</head>
<body>
    <div id="to_do">
        <h1>Things to do</h1>
        <form action="actions/create.php" method="post" class="to-do-form">
            <input type="text" name="description" placeholder="Write your task here" required>
            <button type="submit" class="form-button">
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>

        <div id="tasks">
            <?php foreach($tasks as $task): ?> 
                <div class="task" id="<?= $task['id'] ?>">
                    <input 
                        type="checkbox" 
                        name="progress"
                        class="progress <?= ['completed'] ? '' : 'done' ?> "
                        data-task-id="<?= $task['id']?>"
                        <?= $task['completed'] ? 'checked' : '' ?>
                    >
                    <p class="task-description"><?= $task['description'] ?></p>
                    <div class="task-action">
                        <a  class="action-button edit-button">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="actions/delete.php?id=<?= $task['id']?>" class="action-button delete-button">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </div>
                    <form action="actions/update.php" method="post" class="to-do-form edit-task hidden">
                        <input type="text" class="hidden" name="id" value="<?= $task['id'] ?>">
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Edit your task here"
                            value="<?= $task['description'] ?>"
                        >
                        <button type="submit" class="form-button confirm-button">
                            <i class="fa-solid fa-check"></i>
                        </button>
                    </form>
                </div>
            <?php endforeach ?>    
        </div>

    </div>

    <script src="./src/js/script.js"></script>
</body>
</html>