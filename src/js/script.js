$(document).ready(function (){
    $('.edit-button').on('click',function() {
        var $task = $(this).closest('.task');
        $task.find('.progress').addClass('hidden');
        $task.find('.task-description').addClass('hidden');
        $task.find('.task-action').addClass('hidden');
        $task.find('.edit-task').removeClass('hidden');
    });

    $('.progress').on('click',function() {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });

    $('.progress').on('change',function(){
        const id = $(this).data('task-id');
        const completed = $(this).is(':checked') ? '1' : '0';
        $.ajax({
            url: '../../actions/update-progress.php',
            method: 'POST',
            data: {id: id, completed: completed},
            dataType: 'json',
            success: function (response) {
                if(response.success) {

                }else {
                    alert('Erro ao editar a tarefa')
                }
            },
            error: function(){
                alert('Ocorreu um erro')
            }
        })
    })

});

// Em javascript puro

// document.addEventListener('DOMContentLoaded', function () {
//     var editButtons = document.querySelectorAll('.edit-button');
//     var progressCheckboxes = document.querySelectorAll('.progress');

//     editButtons.forEach(function (editButton) {
//         editButton.addEventListener('click', function () {
//             var task = this.closest('.task');
//             task.querySelector('.progress').classList.add('hidden');
//             task.querySelector('.task-description').classList.add('hidden');
//             task.querySelector('.task-action').classList.add('hidden');
//             task.querySelector('.edit-task').classList.remove('hidden');
//         });
//     });

//     progressCheckboxes.forEach(function (progressCheckbox) {
//         progressCheckbox.addEventListener('click', function () {
//             if (this.checked) {
//                 this.classList.add('done');
//             } else {
//                 this.classList.remove('done');
//             }
//         });
//     });
// });
